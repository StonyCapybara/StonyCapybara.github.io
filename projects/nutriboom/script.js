let navbar = document.querySelector(".navbar");
const navbarHeight = navbar.clientHeight;

let content = document.querySelectorAll(".content");
for (element of content) {
  element.style.height = window.innerHeight - navbarHeight + "px";
}
