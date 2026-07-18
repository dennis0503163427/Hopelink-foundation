// Reusable Helper to initialize modal animations and window clicks
const HopeLinkModal = {
  setup: (modalId, openButtonSelector, closeButtonId) => {
    const modal = document.getElementById(modalId);
    const openButtons = document.querySelectorAll(openButtonSelector);
    const closeBtn = document.getElementById(closeButtonId);

    if (!modal) return;

    // Open Modal Action
    openButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    });

    // Close Modal Button Action
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    // Close if user clicks outside modal card content boundary
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
};
