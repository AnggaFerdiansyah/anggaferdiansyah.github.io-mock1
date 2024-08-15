const hero = document.querySelector("#hero");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const nav = document.querySelector(".navbar");
const body = document.getElementsByTagName("body")[0];

document.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    hero.classList.add("hero-active");
    nav.classList.add("hide");
  } else {
    hero.classList.remove("hero-active");
    nav.classList.remove("hide");
  }
});

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  //   body.style.toggle = body.style.overflow = "hidden";
  if (hamburger.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "visible";
  }
}

const navLink = document.querySelectorAll("#link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
