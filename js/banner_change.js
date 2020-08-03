var state = 0;
var before_state = 0;
var banner = document.querySelectorAll(".banner-img");
var banner_text_box = document.querySelector(".banner-text");
var banner_text = document.querySelectorAll(
  ".banner-text .banner-text-underline"
);

function banner_change() {
  banner_text[state].style.transform = "scale(1)";
  state++;
  if (state === 4) {
    state = 0;
    before_state = 3;
  }
  setTimeout(function () {
    console.log(state);
    banner[before_state].classList.remove("banner-abled");
    banner[state].classList.remove("banner-disabled");

    banner[before_state].classList.add("banner-disabled");
    banner[state].classList.add("banner-abled");
    //        banner.classList[state-1].toggle("abled","disabled");
    //        banner.classList[state].add("abled");

    banner_text[before_state].style.transform = "scale(0)";
    before_state = state;
    banner_change();
  }, 5000);
}
// banner[0].style.transform = "translateY(0px)";
banner_text_box.style.transform = "translate(-50%, -50px)";
banner_change();
