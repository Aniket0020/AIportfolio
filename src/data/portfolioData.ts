import { UserProfile, Project, SkillItem, ExperienceItem, EducationItem } from '../types';

export const initialProfile: UserProfile = {
  name: 'Aniket Ahire',
  roleTitle: 'Full-Stack Software Engineer',
  secondaryTitle: 'Cloud Architect & Web Developer',
  bio: 'Passionate software engineer specializing in building high-performance web applications, resilient backend microservices, and modern user-centric interfaces. Dedicated to clean code, developer experience, and scalable cloud solutions.',
  location: 'San Francisco, CA (Open to Remote)',
  email: 'aniketahire008@gmail.com',
  github: 'https://github.com/aniketahire',
  linkedin: 'https://linkedin.com/in/aniketahire',
  twitter: 'https://x.com/aniketahire',
  availableForHire: true,
  availabilityNote: 'Available for full-time roles & high-impact contracts',
  stats: {
    yearsExp: 4,
    projectsCompleted: 24,
    githubCommits: 1420,
    happyClients: 18,
  },
};

export const sampleProjects: Project[] = [
  {
    id: 'cloudsync',
    title: 'CloudSync Studio',
    tagline: 'Real-time collaborative canvas & distributed state engine',
    description: 'A low-latency collaborative diagramming and design workspace featuring CRDT-based state reconciliation, live presence cursors, and encrypted cloud synchronization.',
    category: 'fullstack',
    tags: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Tailwind CSS', 'Redis'],
    featured: true,
    demoUrl: 'https://example.com/cloudsync',
    githubUrl: 'https://github.com/aniketahire/cloudsync-studio',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    metrics: '<15ms sync latency across 50 concurrent editors',
    highlights: [
      'Implemented conflict-free replicated data types (CRDT) for multiplayer collaboration',
      'Engineered room-based WebSocket clusters with fallback heartbeat mechanisms',
      'Engineered infinite zoom canvas with spatial index indexing for 10,000+ nodes',
      'Reduced memory footprint by 42% through custom canvas render caching'
    ],
    challenges: 'Handling concurrent state conflicts and packet drops during unstable cellular connections without causing UI jank.',
    solution: 'Designed a hybrid CRDT model combined with an optimistic local event queue that guarantees eventual consistency and offline reconciliation.'
  },
  {
    id: 'nexus-analytics',
    title: 'Nexus Intelligence Hub',
    tagline: 'High-throughput event tracking & real-time telemetry dashboard',
    description: 'An enterprise analytics observability platform streaming telemetry data, anomaly detection alerts, and dynamic cohort visualization.',
    category: 'fullstack',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Recharts'],
    featured: true,
    demoUrl: 'https://example.com/nexus',
    githubUrl: 'https://github.com/aniketahire/nexus-analytics',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Processes 2.4M daily telemetry events with zero downtime',
    highlights: [
      'Configured automated threshold alerts with webhook dispatchers (Slack, PagerDuty)',
      'Built custom time-series aggregations with sub-second query latency',
      'Integrated role-based access control (RBAC) and audit log tracking'
    ],
    challenges: 'Rendering dense financial and server metrics without degrading React render cycles.',
    solution: 'Implemented virtualized data grids and Web Worker aggregations to keep the browser main thread at 60 FPS.'
  },
  {
    id: 'sentix-ai',
    title: 'Sentix Document AI',
    tagline: 'Multimodal document intelligence & semantic vector retrieval',
    description: 'AI-assisted enterprise knowledge extractor that ingests PDFs, invoices, and contracts, indexing content into vector stores for conversational retrieval.',
    category: 'ai',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vector DB', 'Tailwind CSS'],
    featured: true,
    demoUrl: 'https://example.com/sentix',
    githubUrl: 'https://github.com/aniketahire/sentix-ai',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    metrics: '94.8% extraction accuracy on complex tabular documents',
    highlights: [
      'Developed modular RAG (Retrieval-Augmented Generation) pipeline',
      'Structured semantic chunking preserving table hierarchies and footnotes',
      'Interactive citation highlighting pointing users to source document pages'
    ],
    challenges: 'Accurately extracting nested multi-row financial tables and footnotes.',
    solution: 'Created a two-phase vision-assisted parsing strategy pairing OCR bounding boxes with semantic vector embeddings.'
  },
  {
    id: 'hyperpay',
    title: 'HyperPay Checkout',
    tagline: 'Cross-border multi-currency payment orchestration engine',
    description: 'Production-ready checkout workflow supporting cards, wallets, automated tax calculation, and idempotent webhook reconciliation.',
    category: 'cloud',
    tags: ['Node.js', 'Express', 'TypeScript', 'Stripe API', 'Redis', 'PostgreSQL'],
    featured: false,
    demoUrl: 'https://example.com/hyperpay',
    githubUrl: 'https://github.com/aniketahire/hyperpay-checkout',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Handled $1.2M+ in test transaction volume with 99.99% idempotency',
    highlights: [
      'Constructed distributed locks with Redis to prevent double billing',
      'Automatic fallback routing between multiple global payment gateways',
      'Fully compliant PCI-DSS client tokenization pattern'
    ],
    challenges: 'Mitigating duplicate webhook delivery storms from payment processors.',
    solution: 'Devised an idempotent event store verifying cryptographic signatures before dispatching atomic database transactions.'
  },
  {
    id: 'pulse-ui',
    title: 'Pulse Design System',
    tagline: 'Accessible headless component kit & design token architecture',
    description: 'An open-source, WAI-ARIA compliant design system engineered for enterprise web applications with dark mode and theme switching.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'NPM'],
    featured: false,
    demoUrl: 'https://example.com/pulse-ui',
    githubUrl: 'https://github.com/aniketahire/pulse-ui',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Over 4,500 monthly package downloads on NPM',
    highlights: [
      'Full keyboard navigation and screen reader support across 45+ components',
      'Zero runtime CSS overhead through Tailwind tokens and CSS variables',
      'Automated visual regression testing pipeline via Playwright'
    ],
    challenges: 'Guaranteeing AA/AAA accessibility compliance across dynamic dialogs, comboboxes, and menus.',
    solution: 'Authored focus-trap and roving tabindex hooks tested against NVDA, VoiceOver, and automated axe-core audits.'
  },
  {
    id: 'devpulse-cli',
    title: 'DevPulse CLI & Diagnostics',
    tagline: 'Lightweight repository health checker & commit auditor',
    description: 'A developer utility providing rapid insights into codebase health, bundle size drift, merge conflict forecasting, and dependency CVE vulnerability alerts.',
    category: 'cloud',
    tags: ['TypeScript', 'Node.js', 'Git API', 'CI/CD', 'Terminal UI'],
    featured: false,
    demoUrl: 'https://example.com/devpulse',
    githubUrl: 'https://github.com/aniketahire/devpulse-cli',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Runs repository health audit in under 1.8 seconds',
    highlights: [
      'Parses git tree history to detect high-churn hotspots and code risk areas',
      'Configurable pre-push hook integration with rich terminal reporting',
      'Generates automated Markdown summaries for GitHub PR comments'
    ],
    challenges: 'Minimizing analysis overhead on gigantic repositories with 50,000+ commits.',
    solution: 'Leveraged native git porcelain commands and stream-based parsing without buffering large commit diffs into memory.'
  }
];

export const skillsData: SkillItem[] = [
  // Languages
  { name: 'TypeScript', level: 95, category: 'Languages', experienceYears: '4+ yrs', featured: true },
  { name: 'JavaScript (ES6+)', level: 96, category: 'Languages', experienceYears: '4+ yrs', featured: true },
  { name: 'Python', level: 85, category: 'Languages', experienceYears: '3+ yrs', featured: true },
  { name: 'Go (Golang)', level: 75, category: 'Languages', experienceYears: '2 yrs' },
  { name: 'SQL', level: 90, category: 'Languages', experienceYears: '4+ yrs', featured: true },
  { name: 'HTML5 & Modern CSS', level: 98, category: 'Languages', experienceYears: '5+ yrs' },

  // Frontend
  { name: 'React 18 / 19', level: 95, category: 'Frontend', experienceYears: '4+ yrs', featured: true },
  { name: 'Next.js', level: 90, category: 'Frontend', experienceYears: '3+ yrs', featured: true },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', experienceYears: '4+ yrs', featured: true },
  { name: 'State Management (Zustand/Redux)', level: 88, category: 'Frontend', experienceYears: '3+ yrs' },
  { name: 'Framer Motion / Animations', level: 86, category: 'Frontend', experienceYears: '3+ yrs' },
  { name: 'WebSockets & Real-Time UI', level: 88, category: 'Frontend', experienceYears: '3+ yrs' },

  // Backend
  { name: 'Node.js & Express', level: 92, category: 'Backend', experienceYears: '4+ yrs', featured: true },
  { name: 'REST & GraphQL APIs', level: 92, category: 'Backend', experienceYears: '4+ yrs', featured: true },
  { name: 'PostgreSQL & Drizzle/Prisma', level: 88, category: 'Backend', experienceYears: '3+ yrs', featured: true },
  { name: 'Redis Caching & PubSub', level: 84, category: 'Backend', experienceYears: '3+ yrs' },
  { name: 'FastAPI (Python)', level: 82, category: 'Backend', experienceYears: '2+ yrs' },
  { name: 'MongoDB & NoSQL', level: 85, category: 'Backend', experienceYears: '3+ yrs' },

  // Cloud & Tools
  { name: 'Docker & Containers', level: 88, category: 'Cloud & Tools', experienceYears: '3+ yrs', featured: true },
  { name: 'AWS & Cloud Deployment', level: 84, category: 'Cloud & Tools', experienceYears: '3+ yrs', featured: true },
  { name: 'Git & GitHub Actions CI/CD', level: 92, category: 'Cloud & Tools', experienceYears: '4+ yrs', featured: true },
  { name: 'Linux & Bash Scripting', level: 86, category: 'Cloud & Tools', experienceYears: '4+ yrs' },
  { name: 'Testing (Jest / Vitest / Playwright)', level: 85, category: 'Cloud & Tools', experienceYears: '3+ yrs' },
  { name: 'System Architecture & Microservices', level: 84, category: 'Cloud & Tools', experienceYears: '3+ yrs' }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack Engineer',
    company: 'Apex Cloud Systems',
    companyUrl: 'https://example.com',
    location: 'San Francisco, CA (Remote)',
    period: '2023 - Present',
    current: true,
    description: 'Leading full-stack development of real-time cloud management dashboards and microservice orchestration tools.',
    achievements: [
      'Architected high-concurrency event ingestion pipeline reducing pipeline processing latency by 35%',
      'Mentored 6 junior engineers, conducted architectural reviews, and spearheaded adoption of TypeScript strict mode',
      'Refactored frontend bundle loading strategies, cutting initial Time-to-Interactive (TTI) from 3.2s to 1.1s',
      'Integrated automated CI/CD deployment pipelines with zero-downtime rolling updates'
    ],
    skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis']
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Software Engineer',
    company: 'Veloce Data Labs',
    companyUrl: 'https://example.com',
    location: 'San Jose, CA',
    period: '2021 - 2023',
    current: false,
    description: 'Designed and deployed customer-facing SaaS applications and RESTful backend services for data visualization.',
    achievements: [
      'Engineered interactive data visualization dashboards handling 50,000+ active enterprise accounts',
      'Built multi-tenant authentication microservice supporting OAuth2, SAML, and session revocations',
      'Designed PostgreSQL schema migrations and optimized queries with composite indexes reducing slow queries by 60%'
    ],
    skills: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Git']
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Synthetix Interactive',
    companyUrl: 'https://example.com',
    location: 'Austin, TX',
    period: '2020 - 2021',
    current: false,
    description: 'Developed high-conversion web applications, responsive user interfaces, and modular UI component libraries.',
    achievements: [
      'Converted static design mockups into high-fidelity, accessible (WAI-ARIA compliant) React interfaces',
      'Collaborated closely with product designers to standardize company-wide design tokens',
      'Boosted web accessibility scores to 98% on Google Lighthouse across core user landing flows'
    ],
    skills: ['React', 'JavaScript', 'CSS3 / Sass', 'HTML5', 'REST APIs', 'Webpack']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'University School of Engineering & Technology',
    location: 'California, USA',
    period: '2016 - 2020',
    grade: '3.8 / 4.0 GPA',
    highlights: [
      'Dean’s Honor List for 6 consecutive semesters',
      'Lead organizer for University Annual Hackathon (400+ participants)',
      'Coursework: Distributed Systems, Algorithms & Data Structures, Database Systems, Computer Networks'
    ]
  }
];
