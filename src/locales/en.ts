const en = {
  header: {
    brand: "Andrey Lucenko",
    navAriaLabel: "Main navigation",
    languageAriaLabel: "Language switcher"
  },
  nav: [
    { label: "Profile", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Cases", href: "#works" }
  ],
  hero: {
    kicker: "Frontend Engineer",
    title: "I build interfaces that stay reliable under real business load",
    description:
      "4+ years in production teams across CRM, robotics, Electron products, and security-focused B2B systems. From UX flow to release and support.",
    status: "Open to full-time role: remote / hybrid / relocation",
    primaryAction: "Message on Telegram",
    secondaryAction: "Send Email",
    metrics: [
      { value: "4+ years", label: "Commercial development" },
      { value: "30+", label: "Released features and modules" },
      { value: "3 domains", label: "Fintech, Robotics, Security" },
      { value: "T-shaped", label: "Frontend + Integration + Product thinking" }
    ],
    focusTags: ["React / Vue", "TypeScript", "Design Systems", "Performance", "DX", "AI-assisted dev"]
  },
  about: {
    title: "About Me",
    lead:
      "My core value: turning business requirements into practical interfaces with clear logic and predictable behavior.",
    description:
      "I work at the product-engineering intersection: clarify scenarios, stabilize state flows, and reduce technical debt without slowing delivery. I own quality through release and post-release support.",
    valueTitle: "What I bring",
    values: [
      "Systematic approach to frontend architecture and state management.",
      "Reliable integrations with API, WebSocket, and peripheral devices.",
      "Clean TypeScript and predictable UI behavior in edge-case flows.",
      "Strong collaboration with QA, backend, and product teams."
    ],
    quickFactsTitle: "Quick facts",
    quickFacts: [
      "Location: Russia, comfortable in distributed teams.",
      "Format: full-time, remote / hybrid.",
      "Languages: Russian (native), English (working).",
      "Tools: Git, CI/CD, Docker, Linux, Figma."
    ],
    contactsTitle: "Contacts",
    phoneLabel: "Phone",
    emailLabel: "Email",
    telegramLabel: "Telegram"
  },
  skills: {
    title: "Core skills",
    description: "Technologies and ownership areas I use confidently in production delivery.",
    groups: [
      {
        title: "Frontend Core",
        items: ["TypeScript", "JavaScript", "React", "Redux", "Vue 3 / Vue 2", "Vuex / Pinia"]
      },
      {
        title: "UI / Platform",
        items: ["Electron", "SCSS / Sass / Less", "Webpack / Vite", "Design System support", "A11y basics"]
      },
      {
        title: "Data & Integrations",
        items: ["REST API", "WebSocket / SignalR", "OAuth 2.0 / OIDC", "IndexedDB", "Zod"]
      },
      {
        title: "Quality & Delivery",
        items: ["Jest / Vitest", "CI/CD", "Docker", "Linux", "Git", "Code Review"]
      }
    ]
  },
  experience: {
    title: "Experience",
    intro:
      "Focused on products where UI stability, fast feedback, and strong external integrations are essential.",
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
        ],
        impact: "Outcome: faster scenario setup and fewer operator-side mistakes."
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
        ],
        impact: "Outcome: faster scenario validation cycles and lower hardware dependency."
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
        ],
        impact: "Outcome: better trade transparency and faster manager workflows."
      }
    ]
  },
  works: {
    title: "Projects & Cases",
    subtitle: "Selected directions where I owned UX logic, frontend delivery, and integration quality.",
    openDemo: "Open Demo",
    noDemo: "Demo by request",
    prevAria: "Previous project",
    nextAria: "Next project",
    dotsAria: "Project switcher",
    slideAria: "Slide",
    resultLabel: "Impact",
    items: [
      {
        title: "Robo Control Dashboard",
        period: "2024",
        description:
          "Monitoring workspace for robotic modules with real-time statuses, event feeds, telemetry, and response scenarios.",
        stack: ["React", "TypeScript", "Charts", "WebSocket"],
        previewUrl:
          "https://images.unsplash.com/photo-1581092160607-ee22731d8ad7?auto=format&fit=crop&w=1280&q=80",
        demoUrl: "#",
        result: "Reduced incident diagnostics time for operators."
      },
      {
        title: "Autonomous Navigation System",
        period: "2023",
        description:
          "Interface for route planning and autonomous movement control with clear state feedback for operators.",
        stack: ["Vue", "TypeScript", "Map UI", "State Machines"],
        previewUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&q=80",
        demoUrl: "#",
        result: "Faster rollout of new scenarios without device-side code changes."
      },
      {
        title: "Robotics Ops Console",
        period: "2022",
        description:
          "Operations center for task management, command queues, and fleet-wide device status tracking.",
        stack: ["React", "Redux", "Vite", "WebSocket"],
        previewUrl:
          "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1280&q=80",
        demoUrl: "#",
        result: "One control surface instead of fragmented service screens."
      }
    ]
  },
  scrollButton: {
    toTopAria: "Scroll to top",
    toTopTitle: "To top"
  }
} as const;

export default en;
