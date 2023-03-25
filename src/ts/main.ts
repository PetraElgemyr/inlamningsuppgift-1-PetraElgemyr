import "./../scss/main.scss";
import { toggleDarkMode } from "./toggleDarkMode";
import { createHtml } from "./createHtml";
import { toggleDarkModeButton } from "./toggleButton";

function init() {
  toggleDarkModeButton.addEventListener("click", toggleDarkMode);
  createHtml();
}

init();
