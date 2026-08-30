document.addEventListener("DOMContentLoaded", () => {
  const links = window.WEDDING_LINKS || {};

  const bindLinks = (selector, collection, dataKey, message) => {
    document.querySelectorAll(selector).forEach((element) => {
      const key = element.dataset[dataKey];
      const url = collection?.[key];

      element.href = url || "#";

      if (!url) {
        element.addEventListener("click", (event) => {
          event.preventDefault();
          alert(message);
        });
      }
    });
  };

  bindLinks(
    ".film-link",
    links.films,
    "film",
    "Ce film sera bientôt disponible."
  );

  bindLinks(
    ".photo-link",
    links.photos,
    "photo",
    "Cet album sera bientôt disponible."
  );

  bindLinks(
    ".bonus-link",
    links.bonus,
    "bonus",
    "Cette vidéo sera bientôt disponible."
  );

  const intro = document.getElementById("intro");

  if (intro) {
    window.setTimeout(() => {
      intro.classList.add("hidden");
    }, 1250);
  }

  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -24px 0px"
      }
    );

    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("visible"));
  }
});
