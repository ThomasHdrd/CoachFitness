// Menu burger
const burgerBtn = document.getElementById("burgerBtn");
const nav = document.querySelector(".nav");

if (burgerBtn && nav) {
  burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Formulaire de contact (simulation)
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.reset();
    if (formSuccess) {
      formSuccess.textContent = "Merci pour votre message, vous serez recontacté rapidement.";
    }
  });
}

// FAQ accordéon
const faqList = document.getElementById("faqList");

if (faqList) {
  faqList.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-question");
    if (!btn) return;

    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");

    // fermer tous
    faqList.querySelectorAll(".faq-item").forEach((el) => {
      el.classList.remove("open");
      const toggle = el.querySelector(".faq-toggle");
      if (toggle) toggle.textContent = "+";
    });

    // ouvrir celui cliqué si ce n'était pas déjà open
    if (!isOpen) {
      item.classList.add("open");
      const toggle = item.querySelector(".faq-toggle");
      if (toggle) toggle.textContent = "−";
    }
  });
}
