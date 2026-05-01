const en = {
  header: {
    brand: "ROBO PORTFOLIO",
    navAriaLabel: "Main navigation",
    languageAriaLabel: "Language switcher"
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "My Work", href: "#works" }
  ],
  hero: {
    kicker: "Andrey Lutcenko // Frontend Developer",
    title: "Frontend Developer with 4+ years of commercial experience",
    description:
      "I build stable and practical B2B interfaces: clear state flows, production-grade integrations, stronger architecture, and reliable delivery."
  },
  about: {
    title: "About Me",
    description:
      "Work format: remote / hybrid / on-site. Looking for full-time employment and open to business trips. Core stack: TypeScript, React/Redux, Vue 3 + Electron. I actively use AI/LLMs as a development tool (prototyping, debugging, tests, docs) with mandatory manual validation.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    telegramLabel: "Telegram"
  },
  skills: {
    title: "My Skills",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Vue 3 / Vue 2",
      "Vuex / Pinia",
      "Electron",
      "SCSS / Sass / Less",
      "Webpack / Vite",
      "Jest / Vitest",
      "Zod",
      "Vue Flow",
      "REST API",
      "OAuth 2.0 / OpenID Connect",
      "WebSocket / SignalR",
      "CI/CD",
      "Docker",
      "Linux",
      "Git"
    ]
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Vipaks-Developer",
        period: "November 2024 — February 2026",
        role: "Frontend Developer",
        stack: [
          "Vue 3 (Composition API, SFC)",
          "TypeScript",
          "Electron",
          "Vue Router",
          "Vuex",
          "Vue Flow",
          "Zod",
          "TanStack Table",
          "IndexedDB"
        ],
        highlights: [
          "Designed and implemented a Vue Flow visual scenario builder for security subsystem behaviors.",
          "Implemented RBAC in UI: roles, permissions, route restrictions, and action-level access control.",
          "Initiated migration from JavaScript to TypeScript and typed domain contracts.",
          "Built an event subscription manager with duplicate protection and reconnect auto-recovery."
        ]
      },
      {
        company: "Promobot",
        period: "July 2023 — November 2024",
        role: "Frontend Developer",
        stack: ["JavaScript", "TypeScript", "Vue", "WebSocket", "Jest", "Three.js", "npm"],
        highlights: [
          "Built and maintained an npm module for robot communication over WebSocket with reconnect and error handling.",
          "Implemented a 3D robot behavior simulator in Three.js for scenario debugging without physical hardware.",
          "Added unit and integration Jest tests for core user flows.",
          "Integrated peripherals into SPA: camera, photo printer, payment terminal, and pass issue device."
        ]
      },
      {
        company: "NAX System",
        period: "October 2021 — May 2023",
        role: "Frontend Developer",
        stack: ["React", "Redux", "SCSS", "REST API", "OAuth 2.0", "OpenID Connect"],
        highlights: [
          "Developed a deal-history module and CRM analytics screens (filters, sorting, statistics).",
          "Implemented risk and price-change alerting for time-critical trading workflows.",
          "Introduced OAuth 2.0 + OpenID Connect authentication.",
          "Expanded core CRM modules: clients, deals, accounts, and reporting."
        ]
      }
    ]
  },
  works: {
    title: "My Work",
    openDemo: "Open Demo",
    prevAria: "Previous project",
    nextAria: "Next project",
    dotsAria: "Project switcher",
    items: [
      {
        title: "ROBO CONTROL DASHBOARD",
        description: "Monitoring dashboard for robotic modules and telemetry.",
        stack: ["React", "TypeScript", "Charts"],
        previewUrl: "https://placehold.co/1280x720/101722/7ee7ff/png?text=Project+Preview+01",
        demoUrl: "#"
      },
      {
        title: "AUTONOMOUS NAV SYSTEM",
        description: "Interface for route planning and autonomous movement control.",
        stack: ["React", "SCSS", "Map UI"],
        previewUrl: "https://placehold.co/1280x720/1a1327/f59e0b/png?text=Project+Preview+02",
        demoUrl: "#"
      },
      {
        title: "ROBOTICS OPS CONSOLE",
        description: "Operations center for tasks and robot fleet status management.",
        stack: ["React", "Vite", "WebSocket"],
        previewUrl: "https://placehold.co/1280x720/151a11/7de57c/png?text=Project+Preview+03",
        demoUrl: "#"
      }
    ]
  },
  scrollButton: {
    toTopAria: "Scroll to top",
    toTopTitle: "To top"
  }
} as const;

export default en;
