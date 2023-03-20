export function toggleDarkMode(btn: HTMLButtonElement) {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    btn.innerHTML = "Välj ljust läge";
  } else {
    btn.innerHTML = "Vält mörkt läge";
  }
}
