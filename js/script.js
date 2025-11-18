/* -------------------------------------------------- */
/* Arquivo: js/scripts.js */
/* Copie o conteúdo abaixo em js/scripts.js */
/* -------------------------------------------------- */

(function () {
  "use strict";

  // Show welcome modal on first load (unless dismissed during session)
  var welcomeShown = sessionStorage.getItem("sd_welcome_shown");
  var welcomeModalEl = document.getElementById("welcomeModal");

  if (welcomeModalEl && !welcomeShown) {
    var welcomeModal = new bootstrap.Modal(welcomeModalEl);
    welcomeModal.show();
    sessionStorage.setItem("sd_welcome_shown", "1");
  }

  // Smooth scroll and active nav highlighting
  var navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    var fromTop = window.scrollY + 100;
    navLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute("href"));
      if (!section) return;
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  window.addEventListener("load", setActiveLink);

  // Enable smooth scroll for in-page anchors
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
