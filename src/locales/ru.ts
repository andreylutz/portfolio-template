const ru = {
  header: {
    brand: "ROBO PORTFOLIO",
    navAriaLabel: "Основная навигация",
    languageAriaLabel: "Переключение языка"
  },
  nav: [
    { label: "Обо мне", href: "#about" },
    { label: "Навыки", href: "#skills" },
    { label: "Опыт", href: "#experience" },
    { label: "Мои работы", href: "#works" }
  ],
  hero: {
    kicker: "Андрей Луценко // Frontend-разработчик",
    title: "Frontend-разработчик с 4+ годами коммерческого опыта",
    description:
      "Делаю B2B-интерфейсы удобными и стабильными: выстраиваю понятные состояния, подключаю интеграции, улучшаю архитектуру и довожу фичи до продакшена."
  },
  about: {
    title: "Обо мне",
    description:
      "Формат работы: удалённо / гибрид / в офисе. Рассматриваю постоянную занятость, возможны командировки. Основной стек: TypeScript, React/Redux, Vue 3 + Electron. Использую ИИ/LLM как рабочий инструмент (прототипирование, дебаг, тесты, документация) с финальной ручной проверкой результата.",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    telegramLabel: "Telegram"
  },
  skills: {
    title: "Мои навыки",
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
    title: "Мой опыт",
    items: [
      {
        company: "Випакс-Разработчик",
        period: "Ноябрь 2024 — Февраль 2026",
        role: "Frontend-разработчик",
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
          "Спроектировал визуальный конструктор сценариев на Vue Flow для подсистем безопасности.",
          "Реализовал RBAC в интерфейсе: роли, права, ограничения маршрутов и действий.",
          "Инициировал миграцию модулей с JavaScript на TypeScript и типизацию доменных контрактов.",
          "Собрал менеджер подписок на события с защитой от дублей и автовосстановлением при реконнекте."
        ]
      },
      {
        company: "Promobot",
        period: "Июль 2023 — Ноябрь 2024",
        role: "Frontend-разработчик",
        stack: ["JavaScript", "TypeScript", "Vue", "WebSocket", "Jest", "Three.js", "npm"],
        highlights: [
          "Разработал npm-модуль связи с роботом по WebSocket с переподключением и обработкой ошибок.",
          "Реализовал 3D-симулятор поведения робота на Three.js для отладки без физического оборудования.",
          "Покрыл критичные сценарии unit и интеграционными тестами на Jest.",
          "Интегрировал периферию в SPA: камера, фотопринтер, платёжный терминал и выдача пропусков."
        ]
      },
      {
        company: "NAX System",
        period: "Октябрь 2021 — Май 2023",
        role: "Frontend-разработчик",
        stack: ["React", "Redux", "SCSS", "REST API", "OAuth 2.0", "OpenID Connect"],
        highlights: [
          "Разработал модуль истории сделок и аналитические экраны CRM (фильтры, сортировки, статистика).",
          "Реализовал систему уведомлений о рисках, изменениях цен и маржинальном обеспечении.",
          "Внедрил OAuth 2.0 + OpenID Connect для безопасной аутентификации.",
          "Развивал ключевые CRM-модули: клиенты, сделки, счета и отчётность."
        ]
      }
    ]
  },
  works: {
    title: "Мои работы",
    openDemo: "Открыть демо",
    prevAria: "Предыдущий проект",
    nextAria: "Следующий проект",
    dotsAria: "Переключение проектов",
    items: [
      {
        title: "ROBO CONTROL DASHBOARD",
        description: "Панель мониторинга роботизированных модулей и телеметрии.",
        stack: ["React", "TypeScript", "Charts"],
        previewUrl: "https://placehold.co/1280x720/101722/7ee7ff/png?text=Project+Preview+01",
        demoUrl: "#"
      },
      {
        title: "AUTONOMOUS NAV SYSTEM",
        description: "Интерфейс маршрутизации и контроля автономного движения.",
        stack: ["React", "SCSS", "Map UI"],
        previewUrl: "https://placehold.co/1280x720/1a1327/f59e0b/png?text=Project+Preview+02",
        demoUrl: "#"
      },
      {
        title: "ROBOTICS OPS CONSOLE",
        description: "Операционный центр управления задачами и состоянием устройств.",
        stack: ["React", "Vite", "WebSocket"],
        previewUrl: "https://placehold.co/1280x720/151a11/7de57c/png?text=Project+Preview+03",
        demoUrl: "#"
      }
    ]
  },
  scrollButton: {
    toTopAria: "Прокрутить в начало страницы",
    toTopTitle: "В начало страницы"
  }
} as const;

export default ru;
