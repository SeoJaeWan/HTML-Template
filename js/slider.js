let current = 1;
let move = -1080;
let profiles;
let profile_box;
const onSlider = (attendants) => {
  profiles = document.querySelectorAll(".testimonials-profile");
  profile_box = document.querySelector(".testimonials-box");

  profile_box.style = "transition: all 0.5s";
  profiles[current].classList.remove("active");

  if (attendants === "left") {
    current++;
    move = move - 1080;
    if (current > 3) {
      changeProfile(-1080);
    }
  } else if (attendants === "right") {
    current--;
    move = move + 1080;
    if (current < 1) {
      changeProfile(-3240);
    }
  }
  profile_box.style.transform = "translateX(" + move + "px)";
  profiles[current].classList.add("active");
};

const changeProfile = (change_move) => {
  let before = current;
  profiles[Math.abs(before - 3)].classList.add("active");

  setTimeout(() => {
    move = change_move;
    console.log(move);
    current = Math.abs(before - 3);
    profile_box.style =
      " transition: all 0s; transform: translateX(" + move + "px)";

    profiles[before].classList.remove("active");
  }, 500);
};
