const toggleDarkModeButton: HTMLButtonElement = document.getElementById(
  "toggleColorBtn"
) as HTMLButtonElement;

export function toggleDarkMode() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    toggleDarkModeButton.innerHTML = "Välj ljust läge";
  } else {
    toggleDarkModeButton.innerHTML = "Vält mörkt läge";
  }
}
