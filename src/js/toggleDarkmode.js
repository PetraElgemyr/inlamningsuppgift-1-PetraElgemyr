export function toggleLightMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    toggleLightModeButton.innerHTML = "Välj ljust läge";
  } else {
    toggleLightModeButton.innerHTML = "Välj mörkt läge";
  }
}
const toggleLightModeButton = document.querySelector(".toggle-btn");
toggleLightModeButton.addEventListener("click", toggleLightMode);
