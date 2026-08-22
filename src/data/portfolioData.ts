import { Project, Experience, Education, Certification, TechSkill, BlogPost } from '../types';

export const PERSONAL_INFO = {
  name: 'Darinhil Tha',
  title: 'Full-Stack Developer',
  tagline: 'Building digital experiences that bridge the gap between complex logic and human intuition.',
  bio: 'Full-stack developer with experience architecting web applications, cloud-native solutions, and responsive user interfaces. Passionate about developer tooling, AI integrations, and clean software craftsmanship.',
  location: 'Phnom Penh, Cambodia (Open to Remote)',
  email: 'darinhil.tha.dev@gmail.com',
  phone: '+855 (0) 12 345 678',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://x.com',
  status: 'Available for Select Projects & Engineering Roles',
  yearsExperience: 1,
  studentsTrained: 60,
  shippedProjects: 15,
  openSourceContributions: '100+',
};

export const PROJECTS: Project[] = [
  {
    id: 'nexus-analytics',
    title: 'Nexus Analytics Platform',
    subtitle: 'Real-time telemetry and streaming data visualization suite',
    description: 'Enterprise observability portal processing 10M+ events per second with sub-50ms query latency and customizable web dashboards.',
    longDescription: 'Nexus Analytics is an end-to-end telemetry platform engineered for high-throughput microservice environments. Built with a React/TypeScript frontend and Rust/WASM stream processing core, it allows engineers to build live visual queries, set latency alerts, and aggregate logs in real time without browser lag.',
    category: 'Web',
    tags: ['React', 'TypeScript', 'Rust', 'WASM', 'WebSockets', 'Tailwind CSS', 'Recharts'],
    stars: 342,
    forks: 58,
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/nexus-analytics',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Event Throughput', value: '10M+/sec' },
      { label: 'Query Latency', value: '< 45ms' },
      { label: 'Uptime Score', value: '99.99%' },
    ],
    highlights: [
      'Architected custom WebAssembly parser for streaming JSON payloads',
      'Implemented canvas-backed time-series visualizer handling 50,000 data points @ 60fps',
      'Reduced memory footprint by 40% compared to previous React charts',
    ],
    codeSnippet: `// StreamProcessor.ts
import { WasmBuffer } from '@nexus/wasm-core';

export class StreamTelemetry {
  private buffer: WasmBuffer;

  constructor(capacity: number = 65536) {
    this.buffer = new WasmBuffer(capacity);
  }

  public processBatch(events: Float64Array): TelemetryFrame {
    const rawPtr = this.buffer.write(events);
    return WasmCore.parse_frame(rawPtr, events.length);
  }
}`
  },
  {
    id: 'cognitive-core',
    title: 'Cognitive Core Engine',
    subtitle: 'Autonomous RAG agent framework for enterprise knowledge graphs',
    description: 'Hybrid vector search and graph-augmented generation pipeline that indexes complex multi-format documents and powers intelligent enterprise Q&A.',
    longDescription: 'Cognitive Core bridges enterprise documentation with Gemini and LLMs through a hybrid GraphRAG pipeline. It parses PDFs, Notion docs, and codebases, converts them into knowledge graphs with embeddings, and synthesizes accurate contextual answers with source citations.',
    category: 'AI',
    tags: ['Python', 'TensorFlow', 'Gemini API', 'LangChain', 'Vector DB', 'FastAPI'],
    stars: 890,
    forks: 142,
    featured: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/cognitive-core',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Accuracy Rate', value: '94.8%' },
      { label: 'Index Speed', value: '1,200 pgs/min' },
      { label: 'Hallucination Drop', value: '-68%' },
    ],
    highlights: [
      'Built semantic graph retrieval merging sparse BM25 with dense vector embeddings',
      'Integrated Gemini Flash & Gemini Pro for sub-second agentic reflection loops',
      'Designed zero-trust security layer enforcing granular document access control',
    ],
    codeSnippet: `class KnowledgeGraphRAG:
    def __init__(self, vector_store, graph_db):
        self.vectors = vector_store
        self.graph = graph_db
        
    async def query(self, prompt: str, top_k: int = 5) -> RAGResponse:
        entities = await self.extract_entities(prompt)
        subgraph = self.graph.traverse(entities, max_depth=2)
        dense_results = await self.vectors.similarity_search(prompt, k=top_k)
        
        context = self.synthesize_context(subgraph, dense_results)
        return await self.gemini_generate(prompt, context)`
  },
  {
    id: 'synctask-app',
    title: 'SyncTask Cross-Platform',
    subtitle: 'Offline-first task & project manager with collaborative CRDT syncing',
    description: 'Ultra-fast productivity app with real-time peer-to-peer sync, instant full-text local search, and zero lag UI.',
    longDescription: 'SyncTask is designed for remote teams working in dynamic network conditions. Utilizing Conflict-Free Replicated Data Types (CRDTs) over WebSockets and WebRTC, users can work seamlessly offline and merge edits deterministically upon reconnecting.',
    category: 'Mobile',
    tags: ['Flutter', 'Dart', 'CRDTs', 'SQLite', 'WebSockets', 'Go'],
    stars: 215,
    forks: 34,
    featured: false,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/synctask-app',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Sync Delay', value: '< 12ms' },
      { label: 'Offline Support', value: '100% Native' },
      { label: 'Mobile Rating', value: '4.9 ★' },
    ],
    highlights: [
      'Implemented LWW-Element-Set CRDT algorithm for collaborative task trees',
      'Built custom Flutter canvas rendering engine for smooth 120fps gesture controls',
      'Integrated cross-device background syncing service with local encryption',
    ]
  },
  {
    id: 'velocity-cli',
    title: 'Velocity Dev Tooling CLI',
    subtitle: 'Blazing fast microservices scaffolding & environment orchestrator',
    description: 'Developer productivity command-line utility for spinning up containerized local preview environments and automated mock APIs.',
    longDescription: 'Velocity CLI replaces cumbersome multi-step bash scripts with a unified Go terminal tool. It parses openapi specs, generates mock data servers, orchestrates Docker containers, and handles secret rotation locally in seconds.',
    category: 'Tools',
    tags: ['Go', 'Docker', 'CLI', 'Kubernetes', 'gRPC'],
    stars: 530,
    forks: 82,
    featured: true,
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/velocity-cli',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'CLI Binary Size', value: '8.4 MB' },
      { label: 'Setup Time', value: '< 3 seconds' },
      { label: 'Monthly Downloads', value: '45,000+' },
    ],
    highlights: [
      'Built zero-dependency single binary distribution using Go cross-compilation',
      'Added interactive TUI (Terminal User Interface) built with Bubbletea framework',
      'Adopted by 150+ engineering teams for standardized local development',
    ],
    codeSnippet: `package main

import (
	"context"
	"fmt"
	"github.com/charmbracelet/bubbletea"
)

func main() {
	p := tea.NewProgram(initialModel())
	if _, err := p.Run(); err != nil {
		fmt.Printf("Error running Velocity CLI: %v\\n", err)
	}
}`
  },
  {
    id: 'lumina-storefront',
    title: 'Lumina E-Commerce Storefront',
    subtitle: 'Headless, sub-second e-commerce engine with edge caching',
    description: 'High-converting luxury retail storefront utilizing React Server Components, Tailwind CSS, and Stripe checkout.',
    longDescription: 'Lumina was engineered for maximum performance and conversion. Featuring instant page loads via Edge SSR, dynamic currency calculation, and AI-driven personalized product recommendation modules.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    stars: 180,
    forks: 29,
    featured: false,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/lumina-storefront',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'First Contentful Paint', value: '0.3s' },
      { label: 'Conversion Lift', value: '+32%' },
    ]
  },
  {
    id: 'structura-parser',
    title: 'Structura WASM Compiler',
    subtitle: 'Safe AST generator and code analyzer running in-browser',
    description: 'High-performance Rust parser compiled to WebAssembly for client-side syntax tree validation and dynamic linting.',
    longDescription: 'Structura allows web applications to parse, inspect, and transform complex source code languages directly inside browser tab memory with near-native executable speeds.',
    category: 'Tools',
    tags: ['Rust', 'WASM', 'TypeScript', 'AST', 'Monaco Editor'],
    stars: 410,
    forks: 46,
    featured: false,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/structura-parser',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Parsing Speed', value: '250k LOC/s' },
      { label: 'WASM Size', value: '1.2 MB' },
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Principal Software Engineer',
    company: 'CloudScale Systems',
    companyUrl: 'https://cloudscale.io',
    period: '2022 — Present',
    location: 'San Francisco, CA',
    type: 'Full-time',
    current: true,
    description: 'Leading the Core Infrastructure & Platform Architecture team. Responsible for global service reliability, distributed data plane design, and developer enablement.',
    highlights: [
      'Spearheaded migration of legacy monolithic API gateway to Rust/gRPC microservices, cutting p99 latency from 180ms to 24ms.',
      'Designed and executed multi-region Kubernetes deployment strategy across AWS and GCP supporting 5M daily active users.',
      'Mentored 14 senior and staff engineers across 3 product squads and established company-wide architecture review standards.',
      'Introduced automated internal developer platform (IDP) reducing developer onboarding time from 2 weeks to 2 days.'
    ],
    tech: ['Rust', 'Go', 'TypeScript', 'Kubernetes', 'AWS', 'GraphQL', 'Kafka', 'Terraform']
  },
  {
    id: 'exp-2',
    role: 'Senior Frontend Architect',
    company: 'TechNova Solutions',
    companyUrl: 'https://technova.dev',
    period: '2019 — 2022',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Directed UI architecture for enterprise SaaS analytics platform. Oversaw frontend performance engineering and micro-frontend strategy.',
    highlights: [
      'Architected micro-frontend framework utilizing Module Federation, allowing 6 autonomous teams to deploy independently.',
      'Engineered WebGL & Canvas visualization library capable of rendering 100k data nodes without dropped frames.',
      'Achieved a 45% reduction in initial bundle sizes and improved Lighthouse performance scores from 62 to 98.',
      'Authored design system component library adopted across 12 product lines with 100% WCAG 2.1 AA accessibility compliance.'
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'WebGL', 'Jest', 'Cypress']
  },
  {
    id: 'exp-3',
    role: 'Full Stack Engineer',
    company: 'DataViz Analytics',
    companyUrl: 'https://dataviz.co',
    period: '2017 — 2019',
    location: 'Boston, MA',
    type: 'Full-time',
    description: 'Built customer-facing data exploration dashboards and background ETL pipelines for financial analytics clients.',
    highlights: [
      'Developed real-time financial charting widgets using D3.js and WebSockets with sub-second update cycles.',
      'Created Python & FastAPI backend services for processing bulk CSV and SQL exports in parallel workers.',
      'Maintained PostgreSQL database cluster with optimized indexing strategies for complex window queries.'
    ],
    tech: ['Python', 'FastAPI', 'React', 'D3.js', 'PostgreSQL', 'Docker', 'Redis']
  },
  {
    id: 'exp-4',
    role: 'Software Engineer',
    company: 'Nexus Commerce',
    period: '2015 — 2017',
    location: 'Boston, MA',
    type: 'Full-time',
    description: 'Developed backend API endpoints and payment gateway integrations for enterprise e-commerce merchants.',
    highlights: [
      'Integrated Stripe and PayPal checkout flows handling over $12M in annual processed volume.',
      'Built automated automated inventory sync service bridging Shopify stores with ERP databases.'
    ],
    tech: ['Node.js', 'Express', 'JavaScript', 'MongoDB', 'Redis', 'AWS S3']
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu-1',
    degree: 'Associate Degree in Web Programming',
    institution: 'Passerelles Numériques Cambodia',
    period: '2025 — Present',
    location: 'Phnom Penh, Cambodia',
    achievements: [
      'Comprehensive training in full-stack web development, software engineering principles, and modern web frameworks.',
      'Hands-on project development emphasizing clean code, responsive design, and practical software solutions.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-PSA-982341'
  },
  {
    id: 'cert-2',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Linux Foundation / CNCF',
    date: '2022',
    credentialId: 'LF-CKA-773120'
  },
  {
    id: 'cert-3',
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud Platform',
    date: '2021',
    credentialId: 'GCP-PCA-449102'
  }
];

export const TECH_SKILLS: TechSkill[] = [
  // Languages
  { name: 'JavaScript / HTML / CSS', category: 'Languages', level: 98, experienceYears: '1 yr', icon: 'Code', description: 'Semantic HTML5, modern CSS3 animations, responsive design, ES6+ JavaScript.', featured: true },
  { name: 'TypeScript', category: 'Languages', level: 98, experienceYears: '1 yr', icon: 'Code', description: 'Expert in advanced generic types, AST transforms, compiler API, and strict type safety.', featured: true },
  { name: 'Python', category: 'Languages', level: 94, experienceYears: '1 yr', icon: 'Terminal', description: 'Asyncio, PyTorch, FastAPI, NumPy, data structures, and AI agent pipelines.', featured: true },
  { name: 'Go', category: 'Languages', level: 90, experienceYears: '1 yr', icon: 'Cpu', description: 'High-concurrency microservices, goroutines, gRPC APIs, and CLI tooling.', featured: true },
  { name: 'Rust', category: 'Languages', level: 85, experienceYears: '1 yr', icon: 'Zap', description: 'Memory safety without GC, WebAssembly bindings, Tokio async runtime, and system level tools.', featured: true },
  { name: 'SQL', category: 'Languages', level: 92, experienceYears: '1 yr', icon: 'Database', description: 'PostgreSQL window functions, indexing strategies, query plan optimization.', featured: false },
  
  // Frameworks & Libraries
  { name: 'Next.js / React', category: 'Frameworks & Libraries', level: 98, experienceYears: '1 yr', icon: 'Globe', description: 'React 19 Server Components, App Router, SSR/ISR caching, state management.', featured: true },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', level: 96, experienceYears: '1 yr', icon: 'Layers', description: 'Utility-first design systems, custom configuration, responsive micro-interactions.', featured: true },
  { name: 'Node.js / Express', category: 'Frameworks & Libraries', level: 95, experienceYears: '1 yr', icon: 'Server', description: 'REST APIs, middleware pipelines, stream processing, worker threads.', featured: true },
  { name: 'FastAPI / Django', category: 'Frameworks & Libraries', level: 88, experienceYears: '1 yr', icon: 'Activity', description: 'High-throughput async Python backends, OpenAPI documentation, Pydantic validation.', featured: false },
  { name: 'Flutter / Dart', category: 'Frameworks & Libraries', level: 82, experienceYears: '1 yr', icon: 'Smartphone', description: 'Cross-platform iOS/Android apps, custom animation controllers, local state persistence.', featured: false },

  // AI & Data Ops
  { name: 'Gemini API & LLM SDKs', category: 'AI & Data Ops', level: 92, experienceYears: '1 yr', icon: 'Sparkles', description: 'Prompt engineering, structured JSON outputs, function calling, multimodal RAG pipelines.', featured: true },
  { name: 'LangChain & Vector DBs', category: 'AI & Data Ops', level: 88, experienceYears: '1 yr', icon: 'Brain', description: 'Pinecone, Qdrant, ChromaDB, semantic search embeddings, graph RAG retrieval.', featured: true },
  { name: 'PyTorch & TensorFlow', category: 'AI & Data Ops', level: 80, experienceYears: '1 yr', icon: 'Cpu', description: 'Model fine-tuning, tensor math, inference optimization, ONNX export.', featured: false },
  
  // Tools & Infrastructure
  { name: 'Vercel Deployment', category: 'Tools & Infrastructure', level: 98, experienceYears: '1 yr', icon: 'Globe', description: 'Frontend deployment, serverless edge functions, domain configuration, preview builds.', featured: true },
  { name: 'Git / GitHub CI/CD', category: 'Tools & Infrastructure', level: 96, experienceYears: '1 yr', icon: 'GitBranch', description: 'Monorepo workflows, GitHub Actions pipelines, automated releases, git rebase hygiene.', featured: true },
  { name: 'Docker / Kubernetes', category: 'Tools & Infrastructure', level: 92, experienceYears: '1 yr', icon: 'Box', description: 'Multi-stage container builds, Helm charts, ingress controllers, cluster scaling.', featured: true },
  { name: 'AWS & GCP Cloud', category: 'Tools & Infrastructure', level: 90, experienceYears: '1 yr', icon: 'Cloud', description: 'Cloud Run, ECS, Lambda, CloudFront S3, IAM, Terraform infrastructure-as-code.', featured: true },
  { name: 'PostgreSQL & Redis', category: 'Tools & Infrastructure', level: 92, experienceYears: '1 yr', icon: 'Database', description: 'Distributed caching, pub/sub messaging, connection pooling, replication setups.', featured: false },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Designing Resilient Microservices in 2024: Beyond the Basics',
    slug: 'designing-resilient-microservices-2024',
    subtitle: 'Practical patterns for circuit breaking, fallback states, and distributed tracing in modern cloud environments.',
    date: 'Jan 18, 2024',
    readTime: '8 min read',
    category: 'Architecture',
    excerpt: 'Building distributed systems that fail gracefully requires more than just retry loops. Here is how we achieved 99.99% availability with rate limiting and automated circuit breakers.',
    likes: 142,
    tags: ['Microservices', 'Distributed Systems', 'Rust', 'Go', 'Resilience'],
    author: {
      name: 'Darinhil Tha',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Principal Engineer'
    },
    contentMarkdown: `
# Designing Resilient Microservices in 2024

When operating at scale, network partitions and service degradation are inevitable. The difference between a minor hiccup and a total outage comes down to your system architecture.

## 1. The Circuit Breaker Pattern

A circuit breaker prevents an application from repeatedly trying to execute an operation that's likely to fail. Here is a conceptual implementation in TypeScript:

\`\`\`typescript
export class CircuitBreaker {
  private failures = 0;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private lastFailureTime: number | null = null;

  constructor(
    private threshold = 5,
    private cooldownMs = 10000
  ) {}

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - (this.lastFailureTime || 0) > this.cooldownMs) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('CircuitBreaker is OPEN. Request rejected.');
      }
    }

    try {
      const result = await fn();
      this.reset();
      return result;
    } catch (err) {
      this.recordFailure();
      throw err;
    }
  }

  private recordFailure() {
    this.failures++;
    this.lastFailureTime = Date.now();
    if (this.failures >= this.threshold) {
      this.state = 'OPEN';
    }
  }

  private reset() {
    this.failures = 0;
    this.state = 'CLOSED';
  }
}
\`\`\`

## 2. Distributed Tracing & Telemetry

Without unified correlation IDs passed across HTTP and gRPC headers, debugging multi-tier call stacks is nearly impossible.

- **Use OpenTelemetry** standard headers (\`traceparent\`).
- Inject correlation IDs at the API Gateway layer.
- Propagate trace contexts across message queues like Kafka and RabbitMQ.

## Key Takeaways
1. Never block worker threads waiting indefinitely for remote dependencies. Always set strict timeouts (e.g. 200ms - 500ms).
2. Degrade features gracefully—if recommendation engines fail, serve static curated fallbacks.
3. Observe error budgets continuously instead of reacting after an outage occurs.
    `
  },
  {
    id: 'post-2',
    title: 'The Future of LLM Agents in Developer Workflows',
    slug: 'future-of-llm-agents-dev-workflows',
    subtitle: 'How agentic reflection, function calling, and contextual search are reshaping software creation.',
    date: 'Feb 02, 2024',
    readTime: '6 min read',
    category: 'AI',
    excerpt: 'AI is shifting from simple autocomplete code suggestions to autonomous multi-step agents that diagnose build errors, write integration tests, and submit PRs.',
    likes: 219,
    tags: ['AI', 'Gemini API', 'LLM', 'DevTools', 'Automation'],
    author: {
      name: 'Darinhil Tha',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Principal Engineer'
    },
    contentMarkdown: `
# The Future of LLM Agents in Developer Workflows

Generative AI models are evolving rapidly from single-turn text completions into interactive systems equipped with tool usage, memory, and environment execution access.

## The Agent Loop Architecture

1. **Planner**: Breaks user request into sequential sub-goals.
2. **Tools Execution**: Executes terminal commands, reads repository files, calls APIs.
3. **Critic/Reflection**: Verifies build results, detects syntax or runtime errors, and self-corrects before outputting.

\`\`\`python
# Example of Gemini Tool Call Dispatcher
async def execute_agent_step(model, prompt, tools):
    response = await model.generate_content(
        contents=prompt,
        config={"tools": tools}
    )
    
    if response.function_calls:
        for call in response.function_calls:
            result = await dispatch_tool(call.name, call.args)
            # Re-feed result back into context
            return await execute_agent_step(model, result, tools)
            
    return response.text
\`\`\`

## Why Context Windows Matter

With Gemini Pro support for 1M+ token context windows, developers can now feed entire codebases into the model without complex fragmentation, unlocking deep cross-file reasoning.
    `
  },
  {
    id: 'post-3',
    title: 'Memory Safety Without Garbage Collection: Rust in Production',
    slug: 'memory-safety-without-gc-rust-production',
    subtitle: 'Understanding ownership, lifetimes, and zero-cost abstractions when migrating from C++ or Go.',
    date: 'Dec 12, 2023',
    readTime: '10 min read',
    category: 'Rust',
    excerpt: 'Why we ported our latency-critical data ingestion engine to Rust and how it eliminated random GC pauses entirely while maintaining memory safety guarantees.',
    likes: 184,
    tags: ['Rust', 'Performance', 'Memory Management', 'Backend'],
    author: {
      name: 'Darinhil Tha',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Principal Engineer'
    },
    contentMarkdown: `
# Memory Safety Without Garbage Collection

Garbage collected languages like Go and Java provide safety, but at the cost of unpredictable GC pauses. Rust takes a radically different approach: static affine type checking during compilation.

## The Core Concept: Ownership

Every value in Rust has an owner. There can only be one owner at a time. When the owner goes out of scope, the memory is immediately deallocated.

\`\`\`rust
fn process_data() {
    let s1 = String::from("hello world");
    let s2 = s1; // Ownership moves to s2! s1 is no longer valid.
    
    // println!("{}", s1); // Compile error! Prevents use-after-free bugs.
    println!("{}", s2);
} // s2 goes out of scope here; memory freed instantly without GC overhead!
\`\`\`

## Results in Production
After migrating our stream processing service to Rust:
- CPU utilization dropped by 38%
- Peak RSS RAM memory usage dropped from 4.2 GB to 610 MB
- Zero tail-latency spikes from GC pauses
    `
  },
  {
    id: 'post-4',
    title: 'Optimizing React Server Components for Ultra-Fast Initial Load',
    slug: 'optimizing-react-server-components',
    subtitle: 'A deep dive into streaming SSR, selective hydration, and bundle minimization techniques.',
    date: 'Nov 28, 2023',
    readTime: '7 min read',
    category: 'React',
    excerpt: 'React 19 and Server Components redefine how we architect frontend applications by keeping heavy dependencies on the server.',
    likes: 96,
    tags: ['React', 'Next.js', 'Frontend', 'Web Development'],
    author: {
      name: 'Darinhil Tha',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Principal Engineer'
    },
    contentMarkdown: `
# Optimizing React Server Components

React Server Components (RSC) allow components to render on the server and stream rendered HTML directly to the client browser while sending zero JavaScript bundle overhead for those server components.

## Streaming with React Suspense

\`\`\`tsx
import { Suspense } from 'react';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Suspense fallback={<AnalyticsSkeleton />}>
        <AsyncAnalyticsWidget />
      </Suspense>
      <Suspense fallback={<FeedSkeleton />}>
        <AsyncActivityFeed />
      </Suspense>
    </div>
  );
}
\`\`\`

By wrapping slow database queries in \`<Suspense>\`, the shell of the page renders instantly on the user's screen in milliseconds, while dynamic data streams in progressive chunks!
    `
  }
];

export const CORE_VALUES = [
  {
    title: 'Intentional Design',
    description: 'Code should be as clean and readable as the UI it powers. I believe in simple abstractions, intuitive APIs, and avoiding unnecessary complexity.',
    icon: 'Compass'
  },
  {
    title: 'Empathy in Engineering',
    description: 'Great software starts with understanding human needs—whether it is the end-user needing speed or team members needing accessible code.',
    icon: 'Heart'
  },
  {
    title: 'Continuous Growth',
    description: 'Technology evolves constantly. Staying curious, reading papers, experimenting with new paradigms, and sharing knowledge keeps engineering sharp.',
    icon: 'TrendingUp'
  }
];

export const CODE_CONFIG_SAMPLE = `// dt-portfolio.config.ts
export const engineerConfig = {
  name: "Darinhil Tha",
  role: "Full-Stack Developer",
  specialties: [
    "Distributed Microservices",
    "React Server Components",
    "AI Agent Architecture & Gemini",
    "Rust & WASM Performance"
  ],
  principles: {
    cleanCode: true,
    userFirst: true,
    lowLatency: true
  },
  status: "Available for Select Consulting & Senior Roles"
};`;
