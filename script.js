
document.addEventListener("DOMContentLoaded", () => {
  const links = window.WEDDING_LINKS || {};

  const setLink = (selector, url) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.href = url || "#";
    if (!url || url === "#") {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Ce lien sera activé dès que l’adresse de partage aura été ajoutée.");
      });
    }
  };

  setLink("#photos-link", links.photos);
  setLink("#download-link", links.downloadAll);

  document.querySelectorAll(".film-link").forEach((element) => {
    const key = element.dataset.film;
    const url = links.films?.[key] || "#";
    element.href = url;
    if (url === "#") {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Ce film sera accessible dès que son lien de partage aura été ajouté.");
      });
    }
  });

  const intro = document.getElementById("intro");
  if (intro) {
    window.setTimeout(() => intro.classList.add("hidden"), 1250);
  }

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((element) => observer.observe(element));
});
