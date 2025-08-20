// ======= SITE DATA (edit me) =======
export const SITE = {
  name: "Matthew SERDAN",
  title: "Digital Infrastructure Professional",
  email: "mjoshua.serdan@gmail.com",
  url: "https://mserdan.co",
  location: "Singapore",
  yearsOfExperience: 5,
  socials: [
    { label: "GitHub", url: "https://github.com/MattYouJoesWah" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/matthew-serdan/" },
    // - I don't have these socials - 
    //{ label: "Twitter/X", url: "https://x.com/yourhandle" },
    //{ label: "Dribbble", url: "https://dribbble.com/yourhandle" }
  ],
  skills: [
    "HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Accessibility",
    "Node.js","Express","REST","GraphQL","Testing (Jest, Playwright)","Figma","CI/CD"
  ],
  testimonials: [
    {
      quote: "Exceptional leadership in driving automation projects and enhancing staff productivity.",
      author: "Gopi Mandapati, ESSEC Business School"
    },
    // {
    //   quote: "Quality is not an act, it is a habit.",
    //   author: "Aristotle"
    // },
    {
      quote: "Matthew is a dedicated professional passionate about delivering thoughtful digital solutions. ",
      author: "Anonymous"
    },
    {
      quote: "Objective-focused. Our Core workflow efficiency increased significantly.",
      author: "Anonymous, Client Company"
    },
    // - Template for adding quote -
    //{
      //quote: "Exceptionally detail‑oriented. Our Core Web Vitals jumped across the board.",
      //author: "Samir Patel, PM at Lumi"
    //}
  ],
  
  resume: {
    summary: "Digital Infrastructure Manager with innovative and end-user friendly solutions to increase productivity and process efficiency.",
    experience: [
      {
        role: "Digital Infrastructure Manager",
        company: "ESSEC Business School",
        period: "2022 — Present",
        bullets: [
          "Led Team in implementing Project Management Solution 'Monday.com'",
          "Initiated AV System Upgrades across APAC Campus for improved user experience",
          "Improved digital productivity and process efficiency across staff departments"
        ]
      },
      {
        role: "Marketing and Web Development",
        company: "MatGabLer Solutions",
        period: "2021 — Present",
        bullets: [
          "Pioneered Company Digital Presence",
          "Built foundational Backend Business Process and Workflows"
        ]
      }
    ],
    education: [
      //{ degree: "NA", school: "NA", period: "NA" }, For Uni Degree if applicable
      { degree: "Business Processes and Systems Engineering", school: "Temasek Polytechnic", period: "2017-2020" }
    ],
    highlights: ["Web Performance", "Design Business Process and Systems", "Accessibility", "Developer Experience"]
  }
};

// ======= PROJECTS (edit me) =======
export const PROJECTS = [
  // {
  //   id: "design-system",
  //   title: "Aurora Design System",
  //   year: 2025,
  //   featured: true,
  //   categories: ["UI/UX", "Web"],
  //   summary: "A scalable component library with tokens, theming, and WCAG‑compliant components.",
  //   cover: "assets/img/projects/sample1.jpg",
  //   images: ["assets/img/projects/sample1.jpg","assets/img/projects/sample2.jpg"],
  //   tech: ["TypeScript","React","Storybook","Figma Tokens"],
  //   url: "https://example.com/aurora",
  //   repo: "https://github.com/yourhandle/aurora",
  //   video: "",
  //   content: `
  //     <p>Aurora is a robust design system featuring <strong>semantic tokens</strong>, a11y‑first components, and
  //     automated visual regression tests. It supports light/dark modes and localization.</p>
  //     <ul>
  //       <li>~40 components with ARIA patterns</li>
  //       <li>Composable theming with CSS variables</li>
  //       <li>CI pipeline to publish versioned packages</li>
  //     </ul>
  //   `
  // },
  {
    id: "matgabler-itsolutions",
    title: "Executive Analyst, MatGabler Solutions",
    year: 2022,
    featured: true,
    categories: ["Web","Marketing","Systems Processes"],
    summary: "Participated in founding and building of IT Solutions Company",
    cover: "assets/img/projects/MatGabLer_logo.png",
    images: ["assets/img/projects/MatGabLer_logo.png"],
    tech: ["Facebook","Adobe Creative Cloud","Framer","WebFlow","AI and Automation"],
    url: "https://www.linkedin.com/company/matgabler-solutions/",
    repo: "https://github.com/yourhandle/perf-dashboard",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: `
      <p>Help Businesses and Companies implement and improve usage of IT resources to increase 
      Marketing Capability and Productivity</p>
    `
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    year: 2025,
    featured: true,
    categories: ["UI/UX", "Web"],
    summary: "Vanilla HTML/CSS/JS, no build tools. Lightweight and extensible.",
    cover: "assets/img/cover.jpg",
    images: ["assets/img/cover.jpg"],
    tech: ["HTML","CSS","JavaScript"],
    url: "index.html",
    repo: "",
    video: "",
    content: `<p>Fully responsive, accessible, and easy to edit. Uses a single data file for content.</p>`
  },
  // {
  //   id: "a11y-audit",
  //   title: "Accessibility Audit Toolkit",
  //   year: 2023,
  //   featured: false,
  //   categories: ["Web","Tooling"],
  //   summary: "CLI and bookmarklet to spot a11y issues quickly.",
  //   cover: "assets/img/projects/sample1.jpg",
  //   images: ["assets/img/projects/sample1.jpg"],
  //   tech: ["Node","Puppeteer"],
  //   url: "https://example.com/a11y",
  //   repo: "https://github.com/yourhandle/a11y-audit",
  //   video: "",
  //   content: `<p>Automates checks for contrast, focus traps, and ARIA landmarks.</p>`
  // }
];
