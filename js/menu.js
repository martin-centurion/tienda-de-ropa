const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const header = document.querySelector("#header");

openMenu.addEventListener("click", () => {
    header.classList.add("aside-visible");
})