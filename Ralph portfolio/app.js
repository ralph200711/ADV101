const projects = [
  { title: 'Nova Analytics', cat: 'web', icon: '📊', a: '#8b5cf6', b: '#22d3ee', desc: 'Real-time SaaS dashboard with live charts and team reporting.', stack: ['React', 'Node', 'D3'] },
  { title: 'Bloom Wellness', cat: 'mobile', icon: '🌿', a: '#10b981', b: '#84cc16', desc: 'Habit and mindfulness app with streaks and gentle reminders.', stack: ['React Native', 'Firebase'] },
  { title: 'Aurora Brand Kit', cat: 'design', icon: '✨', a: '#f43f5e', b: '#f59e0b', desc: 'Complete visual identity, logo system and guidelines for a startup.', stack: ['Figma', 'Illustrator'] },
  { title: 'Orbit Commerce', cat: 'web', icon: '🛒', a: '#3b82f6', b: '#8b5cf6', desc: 'Headless storefront with lightning-fast checkout and search.', stack: ['Next.js', 'Stripe'] },
  { title: 'Pulse Fitness', cat: 'mobile', icon: '💪', a: '#ef4444', b: '#f97316', desc: 'Workout tracker with progress rings and social challenges.', stack: ['Flutter', 'Supabase'] },
  { title: 'Lumen UI System', cat: 'design', icon: '🎨', a: '#06b6d4', b: '#6366f1', desc: 'Accessible design system with 60+ documented components.', stack: ['Figma', 'Storybook'] }
];

const shots = [
  { t: 'Golden Hour', s: 'Landscape', a: '#f59e0b', b: '#ef4444', h: 260 },
  { t: 'Midnight Neon', s: 'Cityscape', a: '#6366f1', b: '#ec4899', h: 340 },
  { t: 'Ocean Drift', s: 'Seascape', a: '#0ea5e9', b: '#14b8a6', h: 220 },
  { t: 'Forest Mist', s: 'Nature', a: '#16a34a', b: '#065f46', h: 320 },
  { t: 'Desert Bloom', s: 'Abstract', a: '#fb7185', b: '#fbbf24', h: 240 },
  { t: 'Deep Space', s: 'Astro', a: '#4c1d95', b: '#0f172a', h: 300 },
  { t: 'Citrus Pop', s: 'Studio', a: '#84cc16', b: '#f97316', h: 280 },
  { t: 'Glacier', s: 'Landscape', a: '#67e8f9', b: '#3b82f6', h: 250 },
  { t: 'Ember', s: 'Abstract', a: '#dc2626', b: '#7c2d12', h: 330 }
];

const skills = [
  ['JavaScript / TypeScript', 95],
  ['React & Next.js', 92],
  ['UI / UX Design', 88],
  ['Node.js & APIs', 82],
  ['CSS & Motion', 94]
];

const timeline = [
  ['1 year+', 'Frontend Developer & Designer', 'Building web projects, interfaces and design work while learning something new every day.']
];

const EMAIL = 'hello@RalpVincentPampilo.dev';

const routes = {
  '/': { label: 'Home', view: home },
  '/portfolio': { label: 'Portfolio', view: portfolio },
  '/about': { label: 'About', view: about },
  '/gallery': { label: 'Gallery', view: gallery }
};

function currentPath() {
  const p = location.hash.slice(1) || '/';
  return routes[p] ? p : '/';
}

function closeMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('links');
  if (burger) { burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  if (nav) nav.classList.remove('open');
}

function renderHeader() {
  const path = currentPath();
  const links = Object.entries(routes)
    .map(([p, r]) => `<a href="#${p}" class="${p === path ? 'active' : ''}" ${p === path ? 'aria-current="page"' : ''}>${r.label}</a>`)
    .join('');
  document.getElementById('header').innerHTML = `
    <div class="nav">
      <a class="logo" href="#/">Ralp Vincent<span>.</span>Pampilo</a>
      <button class="burger" id="burger" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span></button>
      <nav id="links">${links}</nav>
    </div>`;
  const burger = document.getElementById('burger');
  const nav = document.getElementById('links');
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  // close the mobile menu when any link is tapped (even the current page)
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) closeMenu();
  });
}

function projectCard(p, i) {
  return `
    <article class="card" style="--a:${p.a};--b:${p.b};animation-delay:${i * 70}ms">
      <div class="thumb">${p.icon}</div>
      <div class="card-body">
        <span class="tag">${p.cat}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="chips">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      </div>
    </article>`;
}

function home() {
  return `
  <section class="page">
    <div class="hero">
      <div>
        <span class="eyebrow"><b>●</b> Available for new projects</span>
        <h1>I design &amp; build <span class="grad">digital experiences</span> people love.</h1>
        <p class="lead">Hi, I'm Ralp, a frontend engineer and designer crafting fast, beautiful and accessible products for ambitious teams.</p>
        <div class="btns">
          <a class="btn primary" href="#/portfolio">View my work →</a>
          <a class="btn ghost" href="#/about">About me</a>
        </div>
      </div>
      <div class="orb-wrap"><div class="orb">RP</div></div>
    </div>
    <div class="stats">
      <div class="stat"><h3 class="grad">First timer</h3><p>Experience level</p></div>
      <div class="stat"><h3 class="grad">60+</h3><p>Projects shipped</p></div>
      <div class="stat"><h3 class="grad">35</h3><p>Happy clients</p></div>
      <div class="stat"><h3 class="grad">12</h3><p>Design awards</p></div>
    </div>
    <div class="section-head">
      <div><h2>Featured work</h2></div>
      <a class="link-arrow" href="#/portfolio">See all projects →</a>
    </div>
    <div class="grid">${projects.slice(0, 3).map(projectCard).join('')}</div>
    <div class="cta">
      <h2>Have an idea? Let's build it.</h2>
      <p>I'm booking projects for the coming quarter. Say hello and let's talk.</p>
      <a class="btn" href="mailto:${EMAIL}">${EMAIL}</a>
    </div>
  </section>`;
}

function portfolio() {
  return `
  <section class="page">
    <div class="page-title">
      <h1>My <span class="grad">portfolio</span></h1>
      <p>A selection of web, mobile and design projects built with a focus on craft, performance and results.</p>
    </div>
    <div class="filters" id="filters">
      <button class="on" data-f="all">All</button>
      <button data-f="web">Web</button>
      <button data-f="mobile">Mobile</button>
      <button data-f="design">Design</button>
    </div>
    <div class="grid" id="projectGrid">${projects.map(projectCard).join('')}</div>
  </section>`;
}

function about() {
  return `
  <section class="page">
    <div class="page-title">
      <h1>About <span class="grad">me</span></h1>
      <p>The person behind the pixels.</p>
    </div>
    <div class="about-grid">
      <aside class="profile">
        <div class="avatar">RP</div>
        <h3>Ralp Vincent Pampilo</h3>
        <div class="role">Frontend Engineer &amp; Designer</div>
        <ul>
          <li>Location <b>Davao, PH</b></li>
          <li>Experience <b>First timer</b></li>
          <li>Status <b>Open to work</b></li>
          <li>Email <b><a href="mailto:${EMAIL}">${EMAIL}</a></b></li>
        </ul>
      </aside>
      <div>
        <div class="block">
          <h2>Hello, I'm Ralp 👋</h2>
          <p>I'm a frontend engineer who loves the space where design and code meet. I turn complex problems into simple, delightful interfaces that feel effortless to use.</p>
          <p>I'm just getting started, with a year+ of hands-on experience building and learning. I'm eager, curious and ready to grow with the right team. When I'm not coding, you'll find me exploring photography, brewing coffee, or hiking.</p>
        </div>
        <div class="block">
          <h2>Skills</h2>
          ${skills.map(([n, v]) => `
            <div class="skill">
              <div class="skill-top"><span>${n}</span><span>${v}%</span></div>
              <div class="bar"><i data-w="${v}"></i></div>
            </div>`).join('')}
        </div>
        <div class="block">
          <h2>Experience</h2>
          <div class="timeline">
            ${timeline.map(([d, t, p]) => `<div class="tl"><small>${d}</small><h3>${t}</h3><p>${p}</p></div>`).join('')}
          </div>
        </div>
        <div class="block">
          <h2>What I value</h2>
          <div class="values">
            <div class="value"><span>🎯</span><h3>Purposeful design</h3><p>Every detail earns its place.</p></div>
            <div class="value"><span>⚡</span><h3>Performance</h3><p>Fast by default, always.</p></div>
            <div class="value"><span>🤝</span><h3>Collaboration</h3><p>Great work is a team sport.</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function gallery() {
  return `
  <section class="page">
    <div class="page-title">
      <h1>Visual <span class="grad">gallery</span></h1>
      <p>Color studies, experiments and moments collected along the way. Tap any piece to view it larger.</p>
    </div>
    <div class="gallery">
      ${shots.map((s, i) => `
        <div class="tile" data-i="${i}" tabindex="0" role="button" aria-label="View ${s.t}" style="--a:${s.a};--b:${s.b};--h:${s.h}px;animation-delay:${i * 60}ms">
          <div class="cap"><h3>${s.t}</h3><p>${s.s}</p></div>
        </div>`).join('')}
    </div>
  </section>`;
}

function openLightbox(i) {
  const box = document.getElementById('lightbox');
  const card = document.getElementById('lbCard');
  const s = shots[i];
  if (!s) return;
  card.style.setProperty('--a', s.a);
  card.style.setProperty('--b', s.b);
  card.innerHTML = `<h3>${s.t}</h3><p>${s.s}</p>`;
  box.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
  document.body.style.overflow = '';
}

function bindPage(path) {
  if (path === '/portfolio') {
    const grid = document.getElementById('projectGrid');
    const filters = document.getElementById('filters');
    filters.addEventListener('click', e => {
      const btn = e.target.closest('button');
      if (!btn) return;
      filters.querySelectorAll('button').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const f = btn.dataset.f;
      const list = f === 'all' ? projects : projects.filter(p => p.cat === f);
      grid.innerHTML = list.map(projectCard).join('');
    });
  }
  if (path === '/about') {
    setTimeout(() => {
      document.querySelectorAll('.bar i').forEach(el => { el.style.width = el.dataset.w + '%'; });
    }, 150);
  }
  if (path === '/gallery') {
    document.querySelectorAll('.tile').forEach(t => {
      t.addEventListener('click', () => openLightbox(t.dataset.i));
      t.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(t.dataset.i); }
      });
    });
  }
}

function render() {
  const path = currentPath();
  closeLightbox();
  renderHeader();
  document.getElementById('app').innerHTML = routes[path].view();
  document.title = `${routes[path].label} | Ralp Vincent Pampilo`;
  window.scrollTo(0, 0);
  bindPage(path);
}

document.getElementById('lightbox').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); closeMenu(); }
});
window.addEventListener('hashchange', render);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}