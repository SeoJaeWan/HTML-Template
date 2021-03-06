// 2020 7 27 서재완
//  슬라이더 기능 구현
var current = 1; // 표시할 페이지
var move = -20; // 좌우 이동 비율
var profiles; // 모든 표시될 페이지
var profile_box; // 표시될 페이지 틀

var loading = true; // 중복 클릭 방지

// 좌우 방향을 받아와 상황에 따라 20%씩 이동
function onSlider(attendants) {
  if (loading) {
    loading = false;
    profiles = document.querySelectorAll(".testimonials-profile");
    profile_box = document.querySelector(".testimonials-box");

    profile_box.setAttribute("style", "transition: all 0.5s");
    profiles[current].classList.remove("active");

    if (attendants === "right") {
      current++;
      move = move - 20;
      if (current > 3) changeProfile(-20);
    } else if (attendants === "left") {
      current--;
      move = move + 20;
      if (current < 1) changeProfile(-60);
    }

    if (current <= 3 && current >= 1) loading = true;
    profile_box.style.transform = "translateX(" + move + "%)";
    profiles[current].classList.add("active");
  }
}

// 좌우 제일 마지막에 도달했을 떄 순환시켜주는 함수
function changeProfile(change_move) {
  var temp_current = Math.abs(current - 3);
  profiles[temp_current].classList.add("active");

  setTimeout(function () {
    move = change_move;
    profiles[current].classList.remove("active");
    current = temp_current;
    profile_box.setAttribute(
      "style",
      " transition: all 0s; transform: translateX(" + move + "%)"
    );

    loading = true;
  }, 400);
}
