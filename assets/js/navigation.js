document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");
  if (!backBtn) return;

  const text = backBtn.querySelector("[data-back-text]");

  // Sätt rätt label direkt
  if (window.history.length <= 1 && text) {
    text.textContent = "Hem";
  }

  backBtn.addEventListener("click", (e) => {
    if (window.history.length > 1) {
      e.preventDefault();
      window.history.back();
    }
  });
});
