import { Project, Experience, Education, Certification, TechSkill, BlogPost } from '../types';

export const PERSONAL_INFO = {
  name: 'Tha Darinhil',
  title: 'Web Development Student · UX/UI Designer · Software Developer',
  tagline: 'Creating clean, user-friendly interfaces and building functional web applications.',
  bio: "I'm Tha Darinhil, a Web Programming student at Passerelles Numériques Cambodia with hands-on experience in web development, UX/UI design, and software projects. I enjoy turning ideas into clean, responsive, and user-focused digital experiences. Through real-world projects, I've worked with modern web technologies to build functional applications and solve practical problems. I'm passionate about learning new technologies, improving my development and design skills, and creating products that are both useful and easy to use. I'm currently seeking opportunities to apply my skills, gain professional experience, collaborate with a supportive team, and contribute to meaningful software and digital products.",
  bioParagraphs: [
    "I'm Tha Darinhil, a Web Programming student at Passerelles Numériques Cambodia with hands-on experience in web development, UX/UI design, and software projects. I enjoy turning ideas into clean, responsive, and user-focused digital experiences.",
    "Through real-world projects, I've worked with modern web technologies to build functional applications and solve practical problems. I'm passionate about learning new technologies, improving my development and design skills, and creating products that are both useful and easy to use.",
    "I'm currently seeking opportunities to apply my skills, gain professional experience, collaborate with a supportive team, and contribute to meaningful software and digital products."
  ],
  location: 'Phnom Penh, Cambodia',
  email: 'darinhil.tha@student.passerellesnumeriques.org',
  phone: '096 889 3342',
  github: 'https://github.com/Darinhil',
  linkedin: 'https://linkedin.com',
  telegram: 'https://t.me/darinieltha_15',
  status: 'Open to Web Development Opportunities',
  yearsExperience: 2,
  studentsTrained: 0,
  shippedProjects: 10,
  openSourceContributions: '3+',
};

export const PROJECTS: Project[] = [
  {
    id: 'student-leave-management',
    title: 'Student Leave Management System',
    subtitle: 'Student leave management web application',
    description: 'A web application for managing student leave requests and leave types with forms, validation, and status management.',
    longDescription: 'The Student Leave Management System provides CRUD functionality for student leave requests and leave types. It includes request forms, lists, validation, status management, reusable frontend components, and team-based Git workflows.',
    category: 'Web',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    stars: 0,
    forks: 0,
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/student-leave-management-system',
    liveUrl: 'http://54.91.54.3.nip.io/login',
    metrics: [
      { label: 'Requesters', value: 'Students' },
      { label: 'Reviewers', value: 'Teachers & Admins' },
      { label: 'Database', value: 'MySQL' },
    ],
    highlights: [
      'Developed CRUD functionality for student leave requests and leave types',
      'Built request forms, lists, validation, and status management',
      'Created reusable status badges and dropdown components',
      'Worked with Git and feature branches in a team development workflow',
    ]
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    subtitle: 'Backend Application',
    description: 'A system for managing student records with CRUD operations and database integration.',
    longDescription: 'The Student Management System provides a reliable backend for creating, viewing, updating, and deleting student records. It connects to a MySQL database and exposes the core operations needed to manage student information efficiently.',
    category: 'Web',
    tags: ['Node.js', 'Express', 'MySQL'],
    stars: 0,
    forks: 0,
    featured: true,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/student-management-system',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Operations', value: 'CRUD' },
      { label: 'Database', value: 'MySQL' },
    ],
    highlights: [
      'Developed a backend system for managing student information',
      'Implemented CRUD operations and API endpoints',
      'Connected the application with a relational MySQL database',
    ]
  },
  {
    id: 'product-api',
    title: 'Product API CRUD',
    subtitle: 'REST API',
    description: 'A backend API for managing product data using CRUD operations, validation, and database integration.',
    longDescription: 'Product API CRUD is a REST API for product management using Node.js, Express, and MySQL. It supports create, read, update, and delete operations and was tested with Postman.',
    category: 'Web',
    tags: ['Node.js', 'Express', 'MySQL', 'REST API'],
    stars: 0,
    forks: 0,
    featured: false,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/product-api',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Operations', value: 'CRUD' },
      { label: 'Testing', value: 'Postman' },
      { label: 'Database', value: 'MySQL' },
    ],
    highlights: [
      'Built a REST API for product management',
      'Implemented create, read, update, and delete operations',
      'Tested API endpoints using Postman',
    ]
  },
  {
    id: 'best-anime-shop',
    title: 'Best Anime Shop',
    subtitle: 'E-Commerce Website',
    description: 'A responsive e-commerce website for browsing and exploring anime products with a modern shopping interface.',
    longDescription: 'Best Anime Shop is a responsive e-commerce website designed for browsing and exploring anime products. It provides a modern shopping interface that works smoothly across desktop and mobile devices.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    stars: 0,
    forks: 0,
    featured: true,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/best-anime-shop',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Design', value: 'Responsive' },
      { label: 'Interface', value: 'Shopping UI' },
    ],
    highlights: [
      'Built a responsive product browsing experience',
      'Created a modern shopping interface for anime products',
      'Styled the application with Tailwind CSS',
    ]
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    subtitle: 'Web Application',
    description: 'A simple application for tracking income and expenses with an interactive user interface.',
    longDescription: 'Expense Tracker is a simple web application that helps users record, organize, and review their income and expenses through an interactive and easy-to-use interface.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'JavaScript'],
    stars: 0,
    forks: 0,
    featured: false,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/expense-tracker',
    liveUrl: 'https://expense-tracker-indol-five-84.vercel.app/pages/login.html',
    metrics: [
      { label: 'Tracking', value: 'Income & Expenses' },
      { label: 'Interface', value: 'Interactive' },
    ],
    highlights: [
      'Record and organize income and expense entries',
      'Display financial information through an interactive interface',
      'Built with HTML, CSS, and JavaScript',
    ]
  },
  {
    id: 'fitness-app',
    title: 'Fitness App',
    subtitle: 'UX/UI Design',
    description: 'A modern fitness mobile app designed to help users discover workouts, track their progress, and maintain healthy habits.',
    longDescription: 'Fitness App is a modern mobile experience focused on helping users discover workouts, track progress, and build healthy habits through a clear and engaging user interface.',
    category: 'Mobile',
    tags: ['Figma'],
    stars: 0,
    forks: 0,
    featured: false,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    repoUrl: 'https://github.com/darinieltha/fitness-app',
    liveUrl: 'https://web-design-project-eozk.vercel.app/',
    metrics: [
      { label: 'Tool', value: 'Figma' },
      { label: 'Focus', value: 'UX/UI Design' },
    ],
    highlights: [
      'Designed user flows for discovering and completing workouts',
      'Created wireframes, responsive UI screens, and interactive prototypes',
      'Focused on progress tracking and healthy habit-building experiences',
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-pnc',
    role: 'Web Programming Student',
    company: 'Passerelles Numériques Cambodia (PNC)',
    period: '2025 — Present',
    location: 'Phnom Penh, Cambodia',
    type: 'Student Program',
    description: 'Studied web programming with hands-on experience building responsive web applications, REST APIs, database-driven systems, and collaborative software projects.',
    highlights: [
      'Built responsive frontend interfaces with HTML, CSS, JavaScript, Vue.js, and Tailwind CSS',
      'Developed backend applications with PHP, Laravel, Node.js, and REST APIs',
      'Designed and managed relational databases with MySQL and PostgreSQL',
      'Created UI/UX wireframes and prototypes using Figma',
      'Built CRUD applications and full-stack web projects',
      'Worked with APIs, authentication, validation, and database relationships',
      'Used Git and GitHub for version control and team collaboration',
      'Practiced Agile/Scrum workflows in individual and team-based projects',
      'Configured Linux environments and practiced deployment fundamentals',
      'Focus areas: Full-Stack Web Development, Frontend, Backend, UI/UX, REST APIs, Databases, and Deployment',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'PHP', 'Laravel', 'Node.js', 'REST APIs', 'MySQL', 'PostgreSQL', 'Figma', 'Git', 'Linux']
  },
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu-1',
    degree: 'Web Programming',
    institution: 'Passerelles Numériques Cambodia',
    period: '2025 — Present',
    location: 'Phnom Penh, Cambodia',
    achievements: [
      'Studying web development, software development, databases, frontend and backend technologies, Git, deployment, and professional development.',
      'Building practical projects with a focus on clean code, responsive design, teamwork, and real-world software development practices.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  
];

export const TECH_SKILLS: TechSkill[] = [
  { name: 'HTML / CSS / JavaScript', category: 'Languages', level: 88, experienceYears: '2 yrs', icon: 'Code', description: 'Semantic markup, responsive styling, interactive interfaces, and modern JavaScript.', featured: true },
  { name: 'TypeScript', category: 'Languages', level: 68, experienceYears: '1 yr', icon: 'Code', description: 'Typed JavaScript for maintainable frontend and backend projects.', featured: false },
  { name: 'PHP', category: 'Languages', level: 76, experienceYears: '1 yr', icon: 'Code', description: 'Backend programming for web applications and Laravel projects.', featured: true },
  { name: 'Python', category: 'Languages', level: 58, experienceYears: '1 yr', icon: 'Terminal', description: 'Programming fundamentals and backend development practice.', featured: false },
  { name: 'SQL', category: 'Languages', level: 74, experienceYears: '1 yr', icon: 'Database', description: 'Relational data modeling and queries with MySQL and PostgreSQL.', featured: true },
  { name: 'Vue.js', category: 'Frameworks & Libraries', level: 80, experienceYears: '1 yr', icon: 'Globe', description: 'Reusable frontend components and interactive web interfaces.', featured: true },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', level: 84, experienceYears: '1 yr', icon: 'Layers', description: 'Responsive utility-first styling and consistent interface design.', featured: true },
  { name: 'Bootstrap / SASS', category: 'Frameworks & Libraries', level: 70, experienceYears: '1 yr', icon: 'Layers', description: 'Reusable styles, layouts, and responsive design systems.', featured: false },
  { name: 'Laravel', category: 'Frameworks & Libraries', level: 78, experienceYears: '1 yr', icon: 'Server', description: 'Backend web applications, CRUD workflows, validation, and REST APIs.', featured: true },
  { name: 'Node.js / Express', category: 'Frameworks & Libraries', level: 75, experienceYears: '1 yr', icon: 'Server', description: 'REST API development, routing, middleware, and database integration.', featured: true },
  { name: 'Figma / UI Design', category: 'Frameworks & Libraries', level: 72, experienceYears: '1 yr', icon: 'Layers', description: 'Wireframing, prototyping, visual hierarchy, and responsive interface design.', featured: true },
  { name: 'Graphic Design', category: 'Frameworks & Libraries', level: 68, experienceYears: '1 yr', icon: 'Layers', description: 'Visual composition, layout design, color selection, typography, and digital design work.', featured: true },
  { name: 'MySQL / PostgreSQL', category: 'Tools & Infrastructure', level: 76, experienceYears: '1 yr', icon: 'Database', description: 'Database management, relational data, and application integration.', featured: true },
  { name: 'Git / GitHub', category: 'Tools & Infrastructure', level: 82, experienceYears: '2 yrs', icon: 'GitBranch', description: 'Version control, feature branches, collaboration, and team workflows.', featured: true },
  { name: 'Docker / Postman', category: 'Tools & Infrastructure', level: 60, experienceYears: '1 yr', icon: 'Box', description: 'Development tooling, API testing, and application workflow support.', featured: false },
  { name: 'Linux / Deployment', category: 'Tools & Infrastructure', level: 62, experienceYears: '1 yr', icon: 'Terminal', description: 'Basic server configuration, deployment workflows, and Linux development.', featured: false },
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
      name: 'Tha Darinhil',
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
      name: 'Tha Darinhil',
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
      name: 'Tha Darinhil',
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
    tags: ['React', 'Frontend', 'Web Development'],
    author: {
      name: 'Tha Darinhil',
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
    title: 'Practical Web Development',
    description: 'I focus on building useful, responsive web applications with clean structure, clear interfaces, and reliable functionality.',
    icon: 'Compass'
  },
  {
    title: 'User-Friendly Design',
    description: 'I care about how people use a product. I combine frontend development with UI/UX thinking to create simple and comfortable experiences.',
    icon: 'Heart'
  },
  {
    title: 'Learning & Teamwork',
    description: 'I continue improving my skills through real projects, feedback, Agile collaboration, and hands-on practice with new technologies.',
    icon: 'TrendingUp'
  }
];

export const CODE_CONFIG_SAMPLE = `// tha-darinhil.config.ts
export const developerProfile = {
  name: "Tha Darinhil",
  role: "Web Programming Student",
  specialties: [
    "Frontend Web Development",
    "Backend APIs & Databases",
    "UI/UX & Graphic Design",
    "Git, Linux & Deployment"
  ],
  principles: {
    cleanCode: true,
    userFirst: true,
    continuousLearning: true
  },
  status: "Open to Web Development Opportunities"
};`;
