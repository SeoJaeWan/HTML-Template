var state = 0;
var before_state = 0;
var banner = document.querySelectorAll(".banner-img");

function banner_change() {
  state++;
  if (state === 4) {
    state = 0;
    before_state = 3;
  }
  setTimeout(function () {
    console.log(state);
    banner[before_state].style.transform = "translateY(930px)";
    banner[state].style.transform = "translateY(0px)";
    //        banner.classList[state-1].toggle("abled","disabled");
    //        banner.classList[state].add("abled");

    before_state = state;
    banner_change();
  }, 5000);
}
banner[0].style.transform = "translateY(0px)";
banner_change();
