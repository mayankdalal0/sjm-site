/* ==========================================================================
   SHREE JAGANNATH MEDICOS — main.js
   Vanilla JS + Bootstrap 5.3 + Swiper 11
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. Swiper — Trending products carousel (ref: image-2)
  ------------------------------------------------------------------ */
  new Swiper("#trendingSwiper", {
    slidesPerView: 1.15,
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: "#trendingNext",
      prevEl: "#trendingPrev",
    },
    pagination: { el: "#trendingSwiper .swiper-pagination", clickable: true },
    breakpoints: {
      576:  { slidesPerView: 2,    spaceBetween: 18 },
      768:  { slidesPerView: 2.5,  spaceBetween: 20 },
      992:  { slidesPerView: 3,    spaceBetween: 22 },
      1200: { slidesPerView: 4,    spaceBetween: 24 },
      1400: { slidesPerView: 4.5,  spaceBetween: 24 },
    },
  });

  /* ------------------------------------------------------------------
     2. Swiper — Customer reviews carousel
  ------------------------------------------------------------------ */
  new Swiper("#reviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    autoplay: { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: "#reviewsSwiper .swiper-pagination", clickable: true },
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });

  /* ------------------------------------------------------------------
     3. Sticky nav — shadow once the page is scrolled
  ------------------------------------------------------------------ */
  var headerNav = document.getElementById("headerNav");
  var onScrollNav = function () {
    if (!headerNav) return;
    var stuck = window.scrollY > (headerNav.offsetTop + 40);
    headerNav.classList.toggle("is-stuck", stuck);
  };
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* ------------------------------------------------------------------
     4. Reveal-on-scroll animation
  ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-revealed"); });
  }

  /* ------------------------------------------------------------------
     5. Header search — jump to the product catalogue (demo behaviour)
  ------------------------------------------------------------------ */
  ["searchForm", "searchFormMobile"].forEach(function (id) {
    var form = document.getElementById(id);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var target = document.getElementById("products");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ------------------------------------------------------------------
     6. Back-to-top button
  ------------------------------------------------------------------ */
  var backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      function () { backToTop.classList.toggle("show", window.scrollY > 500); },
      { passive: true }
    );
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ------------------------------------------------------------------
     7. Footer year
  ------------------------------------------------------------------ */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
