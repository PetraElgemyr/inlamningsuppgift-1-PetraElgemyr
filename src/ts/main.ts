import "./../scss/main.scss";
import { toggleDarkMode } from "./toggleDarkMode";
import { createHtml } from "./createHtml";
const toggleDarkModeButton: HTMLButtonElement = document.getElementById(
  "toggleColorBtn"
) as HTMLButtonElement;

function init() {
  toggleDarkModeButton.addEventListener("click", () => {
    toggleDarkMode(toggleDarkModeButton);
  });
  createHtml();
}

init();
