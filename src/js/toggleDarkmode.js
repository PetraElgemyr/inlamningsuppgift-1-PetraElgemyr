export function toggleLightMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    toggleLightModeButton.innerHTML = "Välj mörkt läge";
    console.log("ljust läge");
  } else {
    toggleLightModeButton.innerHTML = "Välj ljust läge";
    console.log("mörkt läge");
  }
}
const toggleLightModeButton = document.querySelector(".toggle-btn");
toggleLightModeButton.addEventListener("click", toggleLightMode);
console.log(toggleLightModeButton);
