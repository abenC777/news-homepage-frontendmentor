const navButton = document.getElementById("open_nav");
const closeNavButton = document.getElementById("close_nav");
const navBar = document.getElementById("nav-menu");

navButton.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
});

closeNavButton.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
});
