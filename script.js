document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelectorAll('.nav__list a[href^="#"]');
  const scrollButtons = document.querySelectorAll("[data-scroll]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav--open");
    });
  }

  const smoothScroll = (targetSelector) => {
    const el = document.querySelector(targetSelector);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      smoothScroll(href);
      nav?.classList.remove("nav--open");
    });
  });

  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = btn.getAttribute("data-scroll");
      if (!target) return;
      e.preventDefault();
      smoothScroll(target);
    });
  });
});


