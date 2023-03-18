import { createHtml1 } from "./createHtml";
import "./../scss/main.scss";
import { toggleDarkMode } from "./toggleDarkMode";
const toggleDarkModeButton: HTMLButtonElement = document.getElementById(
  "toggleColorBtn"
) as HTMLButtonElement;

function init() {
  toggleDarkModeButton.addEventListener("click", () => {
    toggleDarkMode(toggleDarkModeButton);
  });
  createHtml1();
}

init();
