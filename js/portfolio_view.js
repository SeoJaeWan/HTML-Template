var portfolio_view = document.querySelector(".portfolio-view");
var portfolio_view_img = document.getElementById("portfolio_view_img");
var toggle = true;

setInterval(function () {
  focusEle = document.activeElement;
  console.log(focusEle);
}, 1000);

function portfolio_toggle(number) {
  if (toggle) {
    portfolio_view_img.src = "./uploads/gallery_img-0" + number + ".jpg";
    console.log(portfolio_view.children);

    portfolio_view.style = "display:flex";

    setTimeout(function () {
      portfolio_view.children[0].style = "transform:scale(1);";
    }, 100);
  } else {
    portfolio_view.children[0].style = "opacity: 0;transform:scale(1);";

    setTimeout(function () {
      portfolio_view.style = "display:none";
      portfolio_view.children[0].style = "transform:scale(0);";
    }, 500);
  }

  toggle = !toggle;
}
