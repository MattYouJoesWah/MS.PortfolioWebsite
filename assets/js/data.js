// ======= SITE DATA (edit me) =======
export const SITE = {
  name: "Jane Doe",
  title: "Frontend Engineer",
  email: "jane@example.com",
  url: "https://example.com",
  location: "Singapore",
  yearsOfExperience: 5,
  socials: [
    { label: "GitHub", url: "https://github.com/yourhandle" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourhandle/" },
    { label: "Twitter/X", url: "https://x.com/yourhandle" },
    { label: "Dribbble", url: "https://dribbble.com/yourhandle" }
  ],
  skills: [
    "HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Accessibility",
    "Node.js","Express","REST","GraphQL","Testing (Jest, Playwright)","Figma","CI/CD"
  ],
  testimonials: [
    {
      quote: "Jane is a rare blend of craft and pragmatism. Our app is faster and more accessible than ever.",
      author: "Alex Chen, CTO at FastShip"
    },
    {
      quote: "Delivered a polished design system ahead of schedule. A joy to collaborate with.",
      author: "Priya Kapoor, Design Lead at Bloom"
    },
    {
      quote: "Exceptionally detail‑oriented. Our Core Web Vitals jumped across the board.",
      author: "Samir Patel, PM at Lumi"
    }
  ],
  resume: {
    summary: "Frontend engineer specializing in performant, accessible interfaces and design systems.",
    experience: [
      {
        role: "Senior Frontend Engineer",
        company: "FastShip",
        period: "2023 — Present",
        bullets: [
          "Led migration to React + TypeScript, reducing bundle by 38%",
          "Built UI library with a11y baked in; shipped to 6 product teams",
          "Improved Lighthouse perf from 76 → 98 on key flows"
        ]
      },
      {
        role: "Frontend Engineer",
        company: "Bloom",
        period: "2021 — 2023",
        bullets: [
          "Implemented SSR for marketing site; +54% SEO traffic",
          "Introduced visual regression testing with Playwright"
        ]
      }
    ],
    education: [
      { degree: "B.Sc. Computer Science", school: "National University of Singapore", period: "2017 — 2021" }
    ],
    highlights: ["Web Performance", "Design Systems", "Accessibility", "Developer Experience"]
  }
};

// ======= PROJECTS (edit me) =======
export const PROJECTS = [
  {
    id: "design-system",
    title: "Aurora Design System",
    year: 2025,
    featured: true,
    categories: ["UI/UX", "Web"],
    summary: "A scalable component library with tokens, theming, and WCAG‑compliant components.",
    cover: "assets/img/projects/sample1.jpg",
    images: ["assets/img/projects/sample1.jpg","assets/img/projects/sample2.jpg"],
    tech: ["TypeScript","React","Storybook","Figma Tokens"],
    url: "https://example.com/aurora",
    repo: "https://github.com/yourhandle/aurora",
    video: "",
    content: `
      <p>Aurora is a robust design system featuring <strong>semantic tokens</strong>, a11y‑first components, and
      automated visual regression tests. It supports light/dark modes and localization.</p>
      <ul>
        <li>~40 components with ARIA patterns</li>
        <li>Composable theming with CSS variables</li>
        <li>CI pipeline to publish versioned packages</li>
      </ul>
    `
  },
  {
    id: "perf-dashboard",
    title: "Web Performance Dashboard",
    year: 2024,
    featured: true,
    categories: ["Web","Data Viz"],
    summary: "Real‑time Core Web Vitals and bundle analytics with alerts.",
    cover: "assets/img/projects/sample2.jpg",
    images: ["assets/img/projects/sample2.jpg"],
    tech: ["Next.js","Chart.js","Node","Postgres"],
    url: "https://example.com/perf",
    repo: "https://github.com/yourhandle/perf-dashboard",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: `
      <p>Aggregates CWV metrics, error rates, and release diffs into a single pane.
      Features anomaly detection and Slack alerts.</p>
    `
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    year: 2025,
    featured: true,
    categories: ["Web"],
    summary: "Vanilla HTML/CSS/JS, no build tools. Lightweight and extensible.",
    cover: "assets/img/cover.jpg",
    images: ["assets/img/cover.jpg"],
    tech: ["HTML","CSS","JavaScript"],
    url: "index.html",
    repo: "",
    video: "",
    content: `<p>Fully responsive, accessible, and easy to edit. Uses a single data file for content.</p>`
  },
  {
    id: "a11y-audit",
    title: "Accessibility Audit Toolkit",
    year: 2023,
    featured: false,
    categories: ["Web","Tooling"],
    summary: "CLI and bookmarklet to spot a11y issues quickly.",
    cover: "assets/img/projects/sample1.jpg",
    images: ["assets/img/projects/sample1.jpg"],
    tech: ["Node","Puppeteer"],
    url: "https://example.com/a11y",
    repo: "https://github.com/yourhandle/a11y-audit",
    video: "",
    content: `<p>Automates checks for contrast, focus traps, and ARIA landmarks.</p>`
  }
];
