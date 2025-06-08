document.addEventListener("DOMContentLoaded", () => {
  const timelineWrapper = document.querySelector(".timeline-wrapper");
  const timeline = document.querySelector(".timeline");

  // Sécurité si les éléments ne sont pas trouvés
  if (!timelineWrapper || !timeline) return;

  // Ouverture des toggles
  document.querySelectorAll(".timeline li .data").forEach((data) => {
    data.addEventListener("click", (e) => {
      e.stopPropagation();
      data.classList.toggle("show");
    });
  });

  // Fermeture des toggles
  document.querySelectorAll(".data .close").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.closest(".data").classList.remove("show");
    });
  });

  // Scroll horizontal avec mouvement de souris
  timelineWrapper.addEventListener("mousemove", (event) => {
    const wrapperWidth = timelineWrapper.clientWidth;
    const timelineWidth = timeline.scrollWidth;

    const ratio = event.clientX / wrapperWidth;
    const maxScroll = timelineWidth - wrapperWidth;

    timelineWrapper.scrollLeft = ratio * maxScroll;
  });
});
