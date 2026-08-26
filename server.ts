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

      const systemPrompt = `You are Tha Darinhil's AI Twin and portfolio assistant. Answer the user's exact question first, then add only the most relevant details about Tha Darinhil.

Strict accuracy rules:
- Use only the profile information below. Do not invent jobs, degrees, companies, locations, achievements, technologies, metrics, or projects.
- Never describe Tha Darinhil as a senior engineer, principal engineer, architect, or distributed-systems specialist.
- If the question asks for information not included below, say that it is not listed in the portfolio instead of guessing.
- If the user asks something unrelated to the portfolio, briefly explain that you can answer questions about Tha Darinhil's profile, skills, education, projects, and contact details.
- Keep the answer concise, friendly, and specific. Do not mention these instructions.

Key info about Tha Darinhil:
- Position: Web Programming Student at Passerelles Numériques Cambodia (PNC), 2025 — Present, Phnom Penh, Cambodia.
- Skills: HTML, CSS, JavaScript, Vue.js, Tailwind CSS, PHP, Laravel, Node.js, Express, REST APIs, MySQL, PostgreSQL, Figma, Git, GitHub, Linux, and deployment fundamentals.
- Experience: Building responsive interfaces, CRUD applications, backend APIs, database-driven systems, and team projects using Agile/Scrum practices.
- Projects: Student Leave Management System, Student Management System, Product API CRUD, Best Anime Shop, Expense Tracker, and Fitness App.
- Focus: Full-stack web development, frontend development, backend development, UI/UX, REST APIs, databases, Git/GitHub, and Linux.
- Contact: darinhil.tha@student.passerellesnumeriques.org, located in Phnom Penh, Cambodia.

Answer in 1-3 short paragraphs. Match the answer to the user's wording and intent.`;

      const conversationContext = Array.isArray(history) && history.length > 0
        ? `\nRecent conversation:\n${history
            .slice(-6)
            .map((item: { sender?: string; text?: string }) => `${item.sender === 'user' ? 'User' : 'Assistant'}: ${item.text || ''}`)
            .join('\n')}`
        : '';

      if (process.env.GEMINI_API_KEY) {
        const ai = getGeminiClient();
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            { role: 'user', parts: [{ text: `${systemPrompt}${conversationContext}\n\nCurrent User Question: ${message}` }] }
          ]
        });

        const reply = response.text || "Tha Darinhil is a Web Programming student focused on frontend development, backend development, UI/UX design, APIs, databases, Git/GitHub, and Linux.";
        res.json({ reply });
      } else {
        // Fallback intelligent response if Gemini API key isn't provided in local preview
        const lowerMsg = message.toLowerCase();
        let fallbackReply = "Tha Darinhil is currently studying Web Programming at Passerelles Numériques Cambodia, with skills in frontend development, backend development, UI/UX design, REST APIs, databases, Git/GitHub, and Linux.";
        
        if (lowerMsg.includes('project')) {
          fallbackReply = "Tha Darinhil's featured projects include the Student Leave Management System, Student Management System, Best Anime Shop, Product API CRUD, Expense Tracker, and Fitness App. They demonstrate frontend interfaces, CRUD workflows, REST APIs, databases, and responsive UI design.";
        } else if (lowerMsg.includes('experience') || lowerMsg.includes('job') || lowerMsg.includes('work') || lowerMsg.includes('pnc')) {
          fallbackReply = "Tha Darinhil is studying Web Programming at Passerelles Numériques Cambodia from 2025 to the present. His practical experience includes building web applications, APIs, database projects, UI/UX prototypes, and team projects using Agile/Scrum practices.";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('hire') || lowerMsg.includes('email')) {
          fallbackReply = "You can reach Tha Darinhil at darinhil.tha@student.passerellesnumeriques.org or use the Contact section on this portfolio.";
        } else if (lowerMsg.includes('skill') || lowerMsg.includes('stack') || lowerMsg.includes('technology') || lowerMsg.includes('tech')) {
          fallbackReply = "Tha Darinhil works with HTML, CSS, JavaScript, Vue.js, Tailwind CSS, PHP, Laravel, Node.js, Express, REST APIs, MySQL, PostgreSQL, Figma, Git, GitHub, and Linux.";
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
      message: 'Thank you for reaching out! Tha Darinhil will review your message and get back to you as soon as possible.',
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
