// 포트폴리오 이미지 클릭 시 확장 이미지 화면에 출력
var portfolio_view = document.querySelector(".portfolio-view");
var portfolio_view_img = document.getElementById("portfolio_view_img");
var toggle = true;

function portfolio_toggle(number) {
  // 이미지를 화면에 확장시켜 출력
  if (toggle) {
    portfolio_view_img.src = "./assets/uploads/gallery_img-0" + number + ".jpg";
    console.log(portfolio_view.children);

    portfolio_view.style.display = "flex";

    setTimeout(function () {
      portfolio_view.children[0].setAttribute(
        "style",
        "opacity: 1;transform:scale(1);"
      );
    }, 100);
    // 화면에 출력된 이미지를 사라지게 만듦
  } else {
    portfolio_view.children[0].setAttribute(
      "style",
      "opacity: 0;transform:scale(1);"
    );

    setTimeout(function () {
      portfolio_view.style.display = "none";
      portfolio_view.children[0].style.transform = "scale(0.1)";
    }, 500);
  }

  toggle = !toggle;
}
