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

const getCarouselVisibleItems = () => {
  if (window.innerWidth <= 639) return 1;
  if (window.innerWidth <= 1023) return 2;
  return 3;
};

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".video-track");
  const cards = Array.from(carousel.querySelectorAll(".video-card"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");

  if (!track || cards.length === 0 || !prevButton || !nextButton) return;

  let currentIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;

  const updateCarousel = () => {
    const visibleItems = getCarouselVisibleItems();
    const maxIndex = Math.max(0, cards.length - visibleItems);
    const gap = parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || "0");
    const cardWidth = cards[0].offsetWidth;

    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= maxIndex;
  };

  prevButton.addEventListener("click", () => {
    currentIndex -= 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex += 1;
    updateCarousel();
  });

  track.addEventListener(
    "touchstart",
    (event) => {
      const firstTouch = event.touches[0];
      touchStartX = firstTouch.clientX;
      touchStartY = firstTouch.clientY;
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (event) => {
      const firstTouch = event.changedTouches[0];
      const deltaX = firstTouch.clientX - touchStartX;
      const deltaY = firstTouch.clientY - touchStartY;
      const swipeThreshold = 40;

      if (Math.abs(deltaX) <= Math.abs(deltaY)) return;
      if (Math.abs(deltaX) < swipeThreshold) return;

      if (deltaX < 0) {
        currentIndex += 1;
      } else {
        currentIndex -= 1;
      }

      updateCarousel();
    },
    { passive: true }
  );

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
});

