import $ from "jquery";
import WOW from "wow.js";

new WOW().init();
$("body").niceScroll();

window.onload = function () {
  // Start scroll to top

  let scroll_to_top = document.querySelector(".scroll-to-top");

  scroll_to_top.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.onscroll = () => {
    window.scrollY >= 1000
      ? scroll_to_top.classList.add("show")
      : scroll_to_top.classList.remove("show");
  };

  // End scroll to top
};
