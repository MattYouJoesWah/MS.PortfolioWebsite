import { SITE, PROJECTS } from "./data.js";

// ---------- helpers ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const el = (tag, attrs = {}, ...children) => {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) node.setAttribute(k, v);
  });
  for (const child of children) {
    if (child == null) continue;
    node.append(child.nodeType ? child : document.createTextNode(child));
  }
  return node;
};

// ---------- init ----------
document.addEventListener("DOMContentLoaded", () => {
  hydrateCommon();
  routeInit();
});

// ---------- common UI (nav, theme, footer/social) ----------
function hydrateCommon(){
  const yearNow = new Date().getFullYear();
  $$("#yearNow").forEach(n => n.textContent = yearNow);

  // Theme
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);
  const themeBtn = $("#themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.classList.contains("light") ? "dark" : "light";
      setTheme(next);
    });
  }
  function setTheme(mode){
    document.documentElement.classList.toggle("light", mode === "light");
    localStorage.setItem("theme", mode);
    const pressed = mode === "light";
    if ($("#themeToggle")) {
      $("#themeToggle").setAttribute("aria-pressed", String(pressed));
      $("#themeToggle img").src = pressed ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
    }
  }

  // Mobile nav
  const btn = $(".nav-toggle");
  const nav = $(".site-nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    $$(".site-nav a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false");
    }));
  }

  // To top
  const toTop = $("#toTop");
  if (toTop) {
    window.addEventListener("scroll", () => {
      toTop.style.display = window.scrollY > 400 ? "block" : "none";
    });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Socials
  const socialList = $("#socialList");
  if (socialList) {
    socialList.innerHTML = SITE.socials.map(s => `<li><a target="_blank" rel="noopener" href="${s.url}">${s.label}</a></li>`).join("");
  }
}

// ---------- routing per-page ----------
function routeInit(){
  const path = location.pathname.split("/").pop() || "index.html";
  switch (path) {
    case "index.html":
    case "":
      renderHome();
      break;
    case "about.html":
      renderAbout();
      break;
    case "portfolio.html":
      renderPortfolio();
      break;
    case "project.html":
      renderProjectPage();
      break;
    case "contact.html":
      initContact();
      break;
  }
}

// ---------- Home ----------
function renderHome(){
  const years = $("#yearsExp");
  if (years) years.textContent = `${SITE.yearsOfExperience}+`;

  const skillsList = $("#skillsList");
  if (skillsList) {
    skillsList.innerHTML = SITE.skills.map(s => `<li class="chip">${s}</li>`).join("");
  }

  const quotesGrid = $("#quotesGrid");
  if (quotesGrid) {
    quotesGrid.innerHTML = SITE.testimonials.map(t =>
      `<figure class="card"><blockquote>“${t.quote}”</blockquote><figcaption class="tiny muted">— ${t.author}</figcaption></figure>`
    ).join("");
  }

  const featuredGrid = $("#featuredGrid");
  if (featuredGrid) {
    const featured = PROJECTS.filter(p => p.featured);
    featuredGrid.append(...featured.map(projectCard));
  }
}

function projectCard(p){
  const cover = el("img", { src: p.cover, alt: `${p.title} cover`, loading:"lazy" });
  const badgeRow = el("div", { class: "badges" }, ...p.tech.slice(0,4).map(t => el("span", { class: "badge" }, t)));
  const cats = el("div", { class: "tiny muted" }, p.categories.join(" · "));
  const link = `project.html?id=${encodeURIComponent(p.id)}`;
  return el("article", { class: "card" },
    el("a", { href: link, class: "cover", "aria-label": p.title }, cover),
    el("h3", {}, el("a", { href: link }, p.title)),
    el("p", { class: "muted" }, p.summary),
    badgeRow, cats
  );
}

// ---------- About / Resume ----------
function renderAbout(){
  const root = $("#resumeRoot");
  if (!root) return;
  const r = SITE.resume;

  const summary = el("section", { class:"resume-section" },
    el("h3", {}, "Summary"),
    el("p", {}, r.summary)
  );

  const exp = el("section", { class:"resume-section" },
    el("h3", {}, "Experience"),
    ...r.experience.map(item => el("div", { class:"item" },
      el("div", { class:"role" }, `${item.role} · ${item.company}`),
      el("div", { class:"tiny muted" }, item.period),
      el("ul", { class:"ticks" }, ...item.bullets.map(b => el("li", {}, b)))
    ))
  );

  const edu = el("section", { class:"resume-section" },
    el("h3", {}, "Education"),
    ...r.education.map(e => el("div", { class:"item" },
      el("div", { class:"role" }, e.degree),
      el("div", { class:"tiny muted" }, `${e.school} · ${e.period}`)
    ))
  );

  const highlights = el("section", { class:"resume-section" },
    el("h3", {}, "Highlights"),
    el("div", { class:"chips" }, ...r.highlights.map(h => el("span", { class:"chip" }, h)))
  );

  root.replaceChildren(summary, exp, edu, highlights);

  const btnPrint = $("#btnPrint");
  if (btnPrint) btnPrint.addEventListener("click", () => window.print());
}

// ---------- Portfolio ----------
function renderPortfolio(){
  const tabs = $("#tabs");
  const grid = $("#portfolioGrid");
  if (!tabs || !grid) return;

  const allCats = Array.from(new Set(PROJECTS.flatMap(p => p.categories))).sort();
  const cats = ["All", ...allCats];
  tabs.replaceChildren(...cats.map((c, i) => {
    const b = el("button", { class:"tab-btn", role:"tab", "aria-selected": String(i===0), "data-cat": c }, c);
    b.addEventListener("click", () => {
      $$(".tab-btn", tabs).forEach(x => x.setAttribute("aria-selected","false"));
      b.setAttribute("aria-selected","true");
      fillGrid(c);
    });
    return b;
  }));

  function fillGrid(cat){
    grid.innerHTML = "";
    const filtered = cat === "All" ? PROJECTS : PROJECTS.filter(p => p.categories.includes(cat));
    if (!filtered.length) grid.append(el("p", { class:"muted" }, "No projects in this category yet."));
    else grid.append(...filtered.map(projectCard));
  }
  fillGrid("All");
}

// ---------- Project detail ----------
function renderProjectPage(){
  const root = $("#projectRoot");
  if (!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const p = PROJECTS.find(x => x.id === id);
  if (!p) {
    document.title = "Project Not Found";
    $("#crumbProject").textContent = "Not found";
    root.append(
      el("h1", {}, "Project not found"),
      el("p", {}, "Try browsing all projects: ", el("a", { href:"portfolio.html" }, "Portfolio"))
    );
    return;
  }
  document.title = `${p.title} — Matthew SERDAN`;
  $("#crumbProject").textContent = p.title;

  const header = el("header", {},
    el("h1", {}, p.title),
    el("div", { class:"tiny muted" }, `${p.year} · ${p.categories.join(" · ")}`),
    el("div", { class:"badges" }, ...p.tech.map(t => el("span", { class:"badge" }, t))),
    el("div", { class:"stack-row" },
      p.url ? el("a", { class:"btn primary", href:p.url, target:"_blank", rel:"noopener" }, "Live Site") : null,
      p.repo ? el("a", { class:"btn", href:p.repo, target:"_blank", rel:"noopener" }, "Source") : null
    )
  );
  const cover = el("div", { class:"card", style:"padding:0" },
    el("img", { src:p.images[0] || p.cover, alt:`${p.title} screenshot`, loading:"lazy" })
  );
  const content = el("section", { class:"section" },
    el("h2", {}, "Overview"),
    el("div", { class:"card" }),
  );
  content.querySelector(".card").innerHTML = p.content; // NOTE: you control data.js

  const gallery = el("section", { class:"section" },
    el("h2", {}, "Gallery"),
    el("div", { class:"grid cards" }, ...p.images.map(src => el("img", { class:"rounded", src, alt:`${p.title} image`, loading:"lazy" })))
  );

  const video = p.video ? el("section", { class:"section" },
    el("h2", {}, "Demo Video"),
    el("div", { class:"card", style:"padding:0;aspect-ratio:16/9;overflow:hidden" },
      el("iframe", {
        src: p.video, title:"Project demo video", loading:"lazy", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen:""
      })
    )
  ) : null;

  root.replaceChildren(header, cover, content, gallery);
  if (video) root.append(video);
}

// ---------- Contact form ----------
function initContact(){
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#name").value.trim();
    const email = $("#email").value.trim();
    const message = $("#message").value.trim();

    let ok = true;
    $("#err-name").textContent = name ? "" : "Name required";
    $("#err-email").textContent = /\S+@\S+\.\S+/.test(email) ? "" : "Valid email required";
    $("#err-message").textContent = message ? "" : "Provide some details to your reaching out";
    ok = !($("#err-name").textContent || $("#err-email").textContent || $("#err-message").textContent);

    if (ok) {
      // mailto fallback — replace with your backend endpoint if desired
      const body = encodeURIComponent(`${message}\n\n— ${name}`);
      location.href = `mailto:${SITE.email}?subject=Website%20Inquiry&body=${body}`;
    }
  });
}

// ---------- small QoL ----------
(() => {
  const years = $("#yearsExp");
  if (years) years.textContent = `${SITE.yearsOfExperience}+`;
})();
