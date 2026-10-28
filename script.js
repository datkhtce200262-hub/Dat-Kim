'use strict';

// All paths are relative so the site also works in a GitHub project repository.
const projects = {
  traffic: {
    category: 'COMPUTER VISION / OBJECT DETECTION', title: 'Traffic Sign Detection',
    image: 'assets/traffic-detection.svg',
    intro: 'A YOLO11n-based project exploring traffic sign detection on the German Traffic Sign Detection Benchmark (GTSDB), with attention to small objects.',
    contributions: ['Contributed to model development.', 'Worked on architecture improvements for small-object detection.', 'Contributed to performance evaluation on GTSDB.'],
    tags: ['YOLO11n', 'GTSDB', 'Small-object detection'],
    metrics: [{ value: '65.0%', label: 'mAP@0.5' }, { value: '34.5%', label: 'mAP@0.5:0.95' }]
  },
  classification: {
    category: 'DEEP LEARNING / IMAGE CLASSIFICATION', title: 'Traffic Sign Classification',
    image: 'assets/sign-classification.svg',
    intro: 'A traffic sign classification project using CNN and MobileNetV2 architectures for 43 classes in the German Traffic Sign Recognition Benchmark (GTSRB).',
    contributions: ['Contributed to image preprocessing and data augmentation.', 'Contributed to model training with TensorFlow and Keras.', 'Contributed to model evaluation across 43 GTSRB classes.'],
    tags: ['CNN', 'MobileNetV2', 'TensorFlow', 'Keras', 'GTSRB']
  },
  helmet: {
    category: 'COMPUTER VISION / IMAGE PREPROCESSING', title: 'Helmet Recognition',
    image: 'assets/helmet-processing.svg',
    intro: 'Image preprocessing work to prepare visual data for a helmet recognition project.',
    contributions: ['Implemented image preprocessing in Python.', 'Used OpenCV to prepare data for helmet recognition.'],
    tags: ['Python', 'OpenCV', 'Image preprocessing']
  }
};

const certificates = {
  gemini: { title: 'Gemini Certified Student', issuer: 'Google for Education', date: 'February 19, 2026', image: 'assets/certificates/gemini-certified.webp', original: 'assets/certificates/gemini-certified.png', description: 'University qualification demonstrating the knowledge, skills, and basic competencies needed to use Google AI. Valid through February 19, 2029.' },
  ibm: { title: 'AI Foundations for Everyone', issuer: 'IBM · Coursera', date: 'April 6, 2026', image: 'assets/certificates/ibm-ai-foundations.webp', original: 'assets/certificates/ibm-ai-foundations.pdf', verify: 'https://coursera.org/verify/specialization/3BJMASLUMHP4', courses: ['Introduction to Artificial Intelligence (AI)', 'Generative AI: Introduction and Applications', 'Generative AI: Prompt Engineering Basics', 'Building AI Powered Chatbots Without Programming'] },
  ethics: { title: 'Ethics in the Age of AI', issuer: 'LearnQuest · Coursera', date: 'June 1, 2026', image: 'assets/certificates/ai-ethics.webp', original: 'assets/certificates/ai-ethics.pdf', verify: 'https://coursera.org/verify/specialization/YN40VYS8JS8H', courses: ['Artificial Intelligence Algorithms Models and Limitations', 'Artificial Intelligence Data Fairness and Bias', 'Artificial Intelligence Privacy and Convenience', 'Artificial Intelligence Ethics in Action'] },
  academic: { title: 'Academic Skills for University Success', issuer: 'The University of Sydney · Coursera', date: 'November 28, 2025', image: 'assets/certificates/academic-skills.webp', original: 'assets/certificates/academic-skills.pdf', verify: 'https://coursera.org/verify/specialization/T769UZ85V2KU', courses: ['Information & Digital Literacy for University Success', 'Problem-Solving Skills for University Success', 'Critical Thinking Skills for University Success', 'Communication Skills for University Success', 'Academic Skills for University Success: Capstone'] }
};

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
function updateThemeLabel() {
  const dark = root.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeButton.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#161e1a' : '#f6f5ef';
}
updateThemeLabel();
themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('dat-theme', root.dataset.theme); } catch (_) {}
  updateThemeLabel();
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => { if (!e.target.closest('.header')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width:601px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
  }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

let scheduled = false;
const navLinks = [...nav.querySelectorAll('a')];
const sections = [...document.querySelectorAll('main > section[id]')];
function updateScroll() {
  const total = root.scrollHeight - window.innerHeight;
  document.querySelector('.scroll-progress').style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
  let current = 'home';
  sections.forEach(section => { if (section.getBoundingClientRect().top <= 180) current = section.id; });
  navLinks.forEach(link => {
    const active = link.hash === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); } }, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

const dialog = document.querySelector('#detail-dialog');
const dialogContent = document.querySelector('#dialog-content');
let lastTrigger;
function openDialog(content, trigger) {
  lastTrigger = trigger;
  dialogContent.innerHTML = content;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
  dialog.querySelector('.dialog-close').focus();
}
function closeDialog() { dialog.close(); }
dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', e => {
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeDialog();
});
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); if (lastTrigger) lastTrigger.focus({ preventScroll: true }); });

document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projects[button.dataset.project];
  openDialog(`<div class="modal-image"><img src="${p.image}" alt="Illustrative visualization for ${p.title}"></div><div class="modal-body"><div class="modal-eyebrow">${p.category}</div><h2 id="dialog-title">${p.title}</h2><p>${p.intro}</p><h3>My contribution</h3><ul>${p.contributions.map(c => `<li>${c}</li>`).join('')}</ul>${p.metrics ? `<div class="metric-row">${p.metrics.map(m => `<div><strong>${m.value}</strong><small>${m.label}</small></div>`).join('')}</div><p class="modal-note">Results on GTSDB, as reported in my résumé.</p>` : ''}<div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div><div class="modal-actions"><a class="button primary" href="https://github.com/datkhtce200262-hub" target="_blank" rel="noopener noreferrer">GitHub profile ↗</a><a class="text-link" href="assets/Kim-Huynh-Tien-Dat-CV.pdf" target="_blank" rel="noopener">Read résumé ↗</a></div><p class="modal-note">Visual is an illustration of the project topic, rather than a model prediction.</p></div>`, button);
}));

document.querySelectorAll('[data-certificate]').forEach(button => button.addEventListener('click', () => {
  const c = certificates[button.dataset.certificate];
  openDialog(`<div class="modal-image"><img src="${c.image}" alt="${c.title} certificate"></div><div class="modal-body"><div class="modal-eyebrow">${c.issuer} / ${c.date}</div><h2 id="dialog-title">${c.title}</h2>${c.description ? `<p>${c.description}</p>` : ''}${c.courses ? `<h3>Completed courses</h3><ul>${c.courses.map(t => `<li>${t}</li>`).join('')}</ul>` : ''}<div class="modal-actions">${c.verify ? `<a class="button primary" href="${c.verify}" target="_blank" rel="noopener noreferrer">Verify on Coursera ↗</a>` : ''}<a class="${c.verify ? 'text-link' : 'button primary'}" href="${c.original}" target="_blank" rel="noopener">Open original ${c.original.endsWith('.pdf') ? 'PDF' : 'image'} ↗</a><a class="text-link" href="${c.original}" download>Download ↓</a></div></div>`, button);
}));

let toastTimeout;
function notify(message) {
  const toast = document.querySelector('.toast');
  clearTimeout(toastTimeout); toast.textContent = message; toast.classList.add('show');
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}
document.querySelector('.copy-email').addEventListener('click', async () => {
  const email = 'datkhtce200262@gmail.com';
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
    else {
      const field = document.createElement('textarea'); field.value = email;
      field.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(field); field.select();
      const copied = document.execCommand('copy'); field.remove();
      if (!copied) throw new Error('Copy unavailable');
    }
    notify('Email address copied.');
  } catch (_) { notify('Email: ' + email); }
});
document.querySelector('#year').textContent = new Date().getFullYear();
