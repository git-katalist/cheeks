const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// document.querySelectorAll(".nav-link").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );

// const navLinksEls = document.querySelectorAll(".nav-link");
// const windowPathname = window.location.pathname;

// navLinksEls.forEach((navLinkEl) => {
//   const navlinkPathname = new URL(navLinkEl.href).pathname;
//   if (windowPathname === navlinkPathname) {
//     navLinkEl.classList.add("active");
//   }
// });
// console.log(window.location.pathname)
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});
