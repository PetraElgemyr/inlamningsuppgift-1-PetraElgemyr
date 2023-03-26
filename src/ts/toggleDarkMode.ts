import { toggleDarkModeButton } from "./toggleButton";

export function toggleDarkMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    toggleDarkModeButton.innerHTML = "Välj ljust läge";
  } else {
    toggleDarkModeButton.innerHTML = "Vält mörkt läge";
  }
}
