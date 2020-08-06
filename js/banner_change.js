var state = 0;
var before_state = 0;
var banner = document.querySelectorAll(".banner-img");
var banner_text_box = document.querySelector(".banner-text");
var banner_text_underline = document.querySelectorAll(
  ".banner-text .banner-text-underline"
);
var banner_text_opacity = document.querySelectorAll(".banner-text-opacity");
var banner_text = document.querySelectorAll(".banner-text-item a");

function banner_change() {
  setInterval(function () {
    state++;
    if (state === 4) {
      state = 0;
      before_state = 3;
    }
    banner[before_state].classList.remove("banner-abled");
    banner[state].classList.remove("banner-disabled");

    banner[before_state].classList.add("banner-disabled");
    banner[state].classList.add("banner-abled");

    banner_text_underline[before_state].classList.remove("change-scale");
    banner_text[before_state * 2].classList.remove("half-active");
    banner_text_opacity[before_state].classList.remove("change-width");

    before_state = state;

    setTimeout(function () {
      banner_text[state * 2].classList.add("half-active");
      banner_text_opacity[state].classList.add("change-width");

      banner_text_underline[state].classList.add("change-scale");

      console.log(state, before_state);
      console.log(banner_text[state * 2]);
    }, 3000);
  }, 10000);
}
banner_text_box.style.transform = "translate(-50%, -50px)";
banner_change();
