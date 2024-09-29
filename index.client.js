const hamburgerBtn = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items-list");
const navItemsList = document.querySelectorAll(".nav-item");

let isActive = false;
function toggleNavItems() {
  if (!isActive) {
    navItems.classList.remove("nav-items-list");
    navItems.classList.add("nav-items");
    isActive = true;
  } else {
    navItems.classList.remove("nav-items");
    navItems.classList.add("nav-items-list");
    isActive = false;
  }
}
navItemsList.forEach((link) => {
  link.addEventListener("click", () => {
    navItems.classList = "nav-items-list";
    isActive = false;
  });
});
hamburgerBtn.addEventListener("click", () => {
  toggleNavItems();
});
