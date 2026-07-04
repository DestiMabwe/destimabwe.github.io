// Nav: add .scrolled class after scrolling past hero
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Project cards: fade in on scroll via IntersectionObserver
const cards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
cards.forEach((card) => observer.observe(card));

// Card carousels: click prev/next arrows to step through screenshots
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const wrap = carousel.closest('.card-image-wrap');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = wrap.querySelectorAll('.carousel-dot');
  let index = 0;

  const show = (nextIndex) => {
    slides[index].classList.remove('is-active');
    dots[index]?.classList.remove('is-active');
    index = (nextIndex + slides.length) % slides.length;
    slides[index].classList.add('is-active');
    dots[index]?.classList.add('is-active');
  };

  wrap.querySelector('.carousel-arrow--prev')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    show(index - 1);
  });

  wrap.querySelector('.carousel-arrow--next')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    show(index + 1);
  });
});
