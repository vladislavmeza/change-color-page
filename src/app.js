import { getRandomColor } from "./utils.js";

function initApp() {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Изменить цвет страницы";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}

export default initApp;
