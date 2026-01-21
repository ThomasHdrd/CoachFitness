// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on link click (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// FAQ: allow only one open at a time (optional premium behavior)
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});

// Contact form validation (front only, demo)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

function setError(name, message) {
  const el = document.querySelector(`[data-error-for="${name}"]`);
  if (el) el.textContent = message || '';
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const nom = String(data.get('nom') || '').trim();
    const prenom = String(data.get('prenom') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    let ok = true;

    setError('nom', '');
    setError('prenom', '');
    setError('email', '');
    setError('message', '');
    if (statusEl) statusEl.textContent = '';

    if (!nom) { setError('nom', 'Veuillez renseigner votre nom.'); ok = false; }
    if (!prenom) { setError('prenom', 'Veuillez renseigner votre prénom.'); ok = false; }
    if (!email || !isEmail(email)) { setError('email', 'Veuillez renseigner un email valide.'); ok = false; }
    if (!message || message.length < 10) { setError('message', 'Veuillez écrire un message (min. 10 caractères).'); ok = false; }

    if (!ok) return;

    // Demo success
    form.reset();
    if (statusEl) statusEl.textContent = "Message envoyé (démo). Je reviens vers vous au plus vite.";
  });
}
