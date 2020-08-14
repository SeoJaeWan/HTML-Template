var state = 0; // 현재 화면에 나오는 배너
var before_state = 0; // 이전 배너
var banner = document.querySelectorAll(".banner-img-item"); // 배너 이미지
var banner_text_box = document.querySelector(".banner-text"); // 배너 텍스트 박스
var banner_text = document.querySelectorAll(".banner-text-item"); // 텍스트 박스 안 Ele

function delay_text(state) {
  setTimeout(function () {
    banner_text[state].classList.add("banner-active");
  }, 3000);
}

function banner_change() {
  delay_text(0);
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

    banner_text[before_state].classList.remove("banner-active");

    before_state = state;

    delay_text(state);
  }, 10000);
}
banner_text_box.style.transform = "translate(-50%, -50px)";

banner_change();
