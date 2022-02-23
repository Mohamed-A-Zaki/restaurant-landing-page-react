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

  window.addEventListener("scroll", function () {
    window.scrollY >= 1000
      ? scroll_to_top.classList.add("show")
      : scroll_to_top.classList.remove("show");
  });

  // End scroll to top

  // strat scroll indicator
  let progress_bar = document.querySelector(".progress-bar");

  window.addEventListener("scroll", function () {
    let scroll = window.scrollY;
    // let scroll = document.documentElement.scrollTop;

    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    progress_bar.style.width = `${(scroll / height) * 100}%`;
  });
  // end scroll indicator

  // start stat section

  let stat_section = document.querySelector(".Statistics");
  let numbers = document.querySelectorAll(
    ".Statistics .container .item .number"
  );

  let start_count = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= stat_section.offsetTop - 300) {
      if (!start_count) {
        increase_count();
        start_count = true;
      }
    }
  });

  function increase_count() {
    numbers.forEach((element) => {
      let num = +element.getAttribute("number");
      let count = setInterval(() => {
        // increase number + 1
        element.textContent++;

        // clear interval after finishing
        if (+element.innerHTML === num) {
          clearInterval(count);
        }
      }, 3000 / num);
    });
  }

  // end stat section
};
