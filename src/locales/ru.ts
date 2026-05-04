const ru = {
  header: {
    brand: "Andrey Lucenko",
    navAriaLabel: "Основная навигация",
    languageAriaLabel: "Переключение языка"
  },
  nav: [
    { label: "Профиль", href: "#about" },
    { label: "Навыки", href: "#skills" },
    { label: "Опыт", href: "#experience" },
    { label: "Кейсы", href: "#works" }
  ],
  hero: {
    kicker: "Frontend Engineer",
    title: "Проектирую интерфейсы, которые выдерживают реальную нагрузку бизнеса",
    description:
      "4+ года в production-командах: CRM, робототехника, Electron-продукты и безопасные B2B-системы. От UX-сценария до релиза и поддержки.",
    status: "Открыт к full-time роли: remote / hybrid / relocation",
    primaryAction: "Написать в Telegram",
    secondaryAction: "Отправить Email",
    metrics: [
      { value: "4+ года", label: "Коммерческой разработки" },
      { value: "30+", label: "Запущенных фич и модулей" },
      { value: "3 домена", label: "Fintech, Robotics, Security" },
      { value: "T-shaped", label: "Frontend + Integration + Product thinking" }
    ],
    focusTags: ["React / Vue", "TypeScript", "Design Systems", "Performance", "DX", "AI-assisted dev"]
  },
  about: {
    title: "Обо мне",
    lead:
      "Сильная сторона: быстро превращаю бизнес-требования в рабочие интерфейсы с понятной логикой и предсказуемым поведением.",
    description:
      "Работаю на стыке продукта и инженерии: уточняю сценарии, стабилизирую состояния, закрываю технический долг без остановки поставки. Беру ответственность за качество до продакшена и после.",
    valueTitle: "Что даю команде",
    values: [
      "Системный подход к архитектуре и состояниям интерфейса.",
      "Надежные интеграции с API, WebSocket и периферийными устройствами.",
      "Чистый TypeScript-код и предсказуемое поведение UI в edge-case сценариях.",
      "Плотная коммуникация с QA, backend и product без потери темпа."
    ],
    quickFactsTitle: "Факты",
    quickFacts: [
      "Локация: Россия, готов к распределенной команде.",
      "Формат: full-time, remote / hybrid.",
      "Языки: русский (native), английский (рабочий).",
      "Инструменты: Git, CI/CD, Docker, Linux, Figma."
    ],
    contactsTitle: "Контакты",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    telegramLabel: "Telegram"
  },
  skills: {
    title: "Ключевые навыки",
    description: "Технологии и зоны ответственности, с которыми уверенно работаю в production.",
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
    title: "Опыт",
    intro:
      "Фокус на продуктах, где важны стабильность интерфейса, скорость реакции и надежная интеграция с внешними системами.",
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
        ],
        impact: "Результат: ускорение настройки сценариев и сокращение ошибок операторов."
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
        ],
        impact: "Результат: быстрее цикл проверки сценариев и меньше зависимость от железа."
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
        ],
        impact: "Результат: повышение прозрачности сделок и ускорение работы менеджеров."
      }
    ]
  },
  works: {
    title: "Проекты и кейсы",
    subtitle:
      "Подборка mock-проектов для демонстрации структуры, подачи и глубины проработки интерфейсов.",
    openRepo: "Репозиторий",
    openProject: "Открыть проект",
    resultLabel: "Эффект",
    items: [
      {
        title: "Autonomous Navigation System",
        period: "2023",
        description:
          "Интерфейс построения маршрутов и контроля автономного движения с визуальной обратной связью по состояниям.",
        stack: ["Vue", "TypeScript", "Map UI", "State Machines"],
        previewUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&q=80",
        repoUrl: "https://github.com/andLucenko/autonomous-navigation-system",
        projectUrl: "https://demo-autonomous-navigation.vercel.app",
        result: "Быстрее запуск новых сценариев без правок на стороне устройства."
      },
      {
        title: "Robotics Ops Console",
        period: "2022",
        description:
          "Операционный центр для управления задачами, очередями команд и состоянием парка устройств.",
        stack: ["React", "Redux", "Vite", "WebSocket"],
        previewUrl:
          "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1280&q=80",
        repoUrl: "https://github.com/andLucenko/robotics-ops-console",
        projectUrl: "https://demo-robotics-ops-console.vercel.app",
        result: "Единая точка контроля вместо разрозненных сервисных экранов."
      },
      {
        title: "Fleet Maintenance Planner",
        period: "2022",
        description:
          "Планировщик технического обслуживания: календарь работ, прогнозы отказов и статус выполнения регламентов по объектам.",
        stack: ["React", "TypeScript", "TanStack Table", "Calendar UI"],
        previewUrl:
          "https://images.unsplash.com/photo-1581091012184-5c8f78f7d99d?auto=format&fit=crop&w=1280&q=80",
        repoUrl: "https://github.com/mock-org/fleet-maintenance-planner",
        projectUrl: "https://mock-fleet-maintenance.vercel.app",
        result: "Сокращение ручного планирования и меньше пропусков критичных ТО."
      },
      {
        title: "Industrial Alarm Center",
        period: "2021",
        description:
          "Центр обработки тревог для производственной площадки: приоритизация, фильтры по зоне риска и журнал подтверждений.",
        stack: ["Vue 3", "Pinia", "WebSocket", "ECharts"],
        previewUrl:
          "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1280&q=80",
        repoUrl: "https://github.com/mock-org/industrial-alarm-center",
        projectUrl: "https://mock-alarm-center.vercel.app",
        result: "Быстрее реакция дежурных смен и прозрачная история инцидентов."
      },
      {
        title: "Energy Flow Analytics",
        period: "2021",
        description:
          "Аналитическая витрина энергопотребления: графики потоков, аномалии по узлам и контроль расхода по сменам.",
        stack: ["React", "D3.js", "TypeScript", "REST API"],
        previewUrl:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1280&q=80",
        repoUrl: "https://github.com/mock-org/energy-flow-analytics",
        projectUrl: "https://mock-energy-flow.vercel.app",
        result: "Улучшение контроля потребления и более быстрый поиск потерь."
      }
    ]
  },
  scrollButton: {
    toTopAria: "Прокрутить в начало страницы",
    toTopTitle: "В начало страницы"
  }
} as const;

export default ru;
