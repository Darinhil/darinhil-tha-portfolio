import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { resolvePort } from './server-utils';

dotenv.config();

async function startServer() {
  const app = express();
  const HOST = process.env.HOST || '127.0.0.1';
  const PORT = await resolvePort(3000, HOST);

  app.use(express.json());

  // Initialize Gemini API lazily
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY environment variable is not configured');
      }
      aiClient = new GoogleGenAI({ apiKey });
    }
    return aiClient;
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // AI Portfolio Assistant Chat Endpoint
  app.post('/api/ai-chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message is required' });
        return;
      }

      const systemPrompt = `You are Darinhil Tha's AI Twin & Portfolio Assistant. Darinhil is a Full-Stack Developer with extensive experience in distributed systems, React, TypeScript, Rust, Go, Python, and cloud infrastructure.
You represent Darinhil in a professional, articulate, and friendly tone.

Key info about Darinhil:
- Experience: Principal Engineer at CloudScale Systems (Rust, Kubernetes, gRPC), Senior Frontend Architect at TechNova (React Micro-frontends, WebGL), Full Stack at DataViz Analytics (Python, FastAPI, D3.js).
- Education: Master of Science in CS from Stanford University, BS in Software Engineering from University of Waterloo.
- Top Projects: Nexus Analytics Platform (10M+ events/sec), Cognitive Core Engine (Hybrid GraphRAG with Gemini), SyncTask App (CRDT Flutter app), Velocity CLI (Go dev tool with 45k+ monthly downloads).
- Specialties: Full-stack Web Dev, Distributed Microservices, AI/RAG Integration, Developer Tooling.
- Contact: darinhil.tha.dev@gmail.com, located in San Francisco, CA. Available for select consulting & senior technical roles.

Answer the user's question concisely, highlight relevant projects or skills, and be helpful and engaging. Keep responses focused (2-4 paragraphs max).`;

      if (process.env.GEMINI_API_KEY) {
        const ai = getGeminiClient();
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            { role: 'user', parts: [{ text: `${systemPrompt}\n\nUser Question: ${message}` }] }
          ]
        });

        const reply = response.text || "I'm happy to help answer any questions about Darinhil's engineering background, open-source projects, or tech stack!";
        res.json({ reply });
      } else {
        // Fallback intelligent response if Gemini API key isn't provided in local preview
        const lowerMsg = message.toLowerCase();
        let fallbackReply = "Thanks for asking! Darinhil is a Full-Stack Developer specializing in React, TypeScript, Rust, Go, and distributed microservices.";
        
        if (lowerMsg.includes('project') || lowerMsg.includes('nexus') || lowerMsg.includes('cognitive')) {
          fallbackReply = "Darinhil has built several high-impact projects including Nexus Analytics (processing 10M+ events/sec with WASM), Cognitive Core (a hybrid GraphRAG engine using Gemini), and Velocity CLI (a Go dev tool downloaded 45,000+ times monthly). Check out the Projects tab for code snippets and live demos!";
        } else if (lowerMsg.includes('experience') || lowerMsg.includes('job') || lowerMsg.includes('work') || lowerMsg.includes('cloudscale')) {
          fallbackReply = "Darinhil currently serves as Principal Engineer at CloudScale Systems leading infrastructure & platform teams. Previously, he was Senior Frontend Architect at TechNova and Full Stack Engineer at DataViz Analytics.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('hire') || lowerMsg.includes('email')) {
          fallbackReply = "You can reach Darinhil directly at darinhil.tha.dev@gmail.com or submit a message using the Contact section. Darinhil is currently available for select consulting engagements and senior roles.";
        } else if (lowerMsg.includes('skill') || lowerMsg.includes('stack') || lowerMsg.includes('python') || lowerMsg.includes('rust')) {
          fallbackReply = "Darinhil's technical arsenal spans TypeScript, React/Next.js, Rust, Go, Python, GraphQL, Docker, Kubernetes, and AI RAG pipelines with Gemini.";
        }

        res.json({ reply: fallbackReply });
      }
    } catch (err: any) {
      console.error('AI Chat Error:', err);
      res.status(500).json({ error: 'Failed to process AI request', details: err.message });
    }
  });

  // Contact Form API endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message, serviceType } = req.body;
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Name, email, and message are required' });
      return;
    }

    console.log(`[Contact Form Received] From: ${name} <${email}>, Subject: ${subject}`);
    res.json({
      success: true,
      message: 'Thank you for reaching out! Darinhil will get back to you within 24 business hours.',
      receivedAt: new Date().toISOString()
    });
  });

  // Vite development or production static serving
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`DV Portfolio Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Server startup error:', err);
  process.exit(1);
});
