var state = 0;
var before_state = 0;
var banner = document.querySelectorAll(".banner-img");
var banner_text_box = document.querySelector(".banner-text");
var banner_text_underline = document.querySelectorAll(
  ".banner-text .banner-text-underline"
);
var banner_text_opacity = document.querySelectorAll(".banner-text-opacity");
var banner_text = document.querySelectorAll(".banner-text-item");

function banner_change() {
  banner_text_underline[0].style.transform = "scale(1)";
  banner_text_box.style.transform = "translate(-50%, -50px)";
  banner_text[0].classList.add("half-active");
  banner_text_opacity[0].classList.add("change-width");

  setInterval(function () {
    state++;
    if (state === 4) {
      state = 0;
      before_state = 3;
    }
    console.log(state);
    banner[before_state].classList.remove("banner-abled");
    banner[state].classList.remove("banner-disabled");

    banner[before_state].classList.add("banner-disabled");
    banner[state].classList.add("banner-abled");
    //        banner.classList[state-1].toggle("abled","disabled");
    //        banner.classList[state].add("abled");

    banner_text_underline[before_state].style.transform = "scale(0)";
    banner_text[before_state].classList.remove("half-active");
    banner_text_opacity[before_state].classList.remove("change-width");

    before_state = state;

    setTimeout(function () {
      banner_text[state].classList.add("half-active");
      banner_text_opacity[state].classList.add("change-width");

      banner_text_underline[state].style.transform = "scale(1)";

      console.log(state, before_state);
      console.log(banner_text[state]);
    }, 3000);
  }, 10000);
}
// banner[0].style.transform = "translateY(0px)";

banner_change();
