document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const backToTop = document.getElementById("backToTop");
  const revealItems = document.querySelectorAll(".reveal-on-scroll");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 2;
      window.scrollTo({ top: top, behavior: "smooth" });
      nav.classList.remove("open");
    });
  });

  burger.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("visible", window.scrollY > 600);
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealItems.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      burger.classList.toggle('is-open');
    });

  
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
      });
    });
  }
});