const toggleButton = document.querySelector("[data-Menu-Icon]");
const menu = document.querySelector("[data-menu]");
const screen = document.querySelector("[data-bg-screen]");

function navActions() {
  menu.classList.toggle("active");
  screen.classList.toggle("active");
}
toggleButton.addEventListener("click", () => {
  navActions();
});
screen.addEventListener("click", () => {
  navActions();
});
