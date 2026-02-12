const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom")
  .forEach((element) => observer.observe(element));

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.contains("active");

    // Mantem somente um item aberto por vez para reduzir ruído visual.
    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("active");
      faqItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
