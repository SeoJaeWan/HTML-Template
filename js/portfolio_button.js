// 2020 07 30 서재완
// 포트폴리오 버튼 구현

var portfolio_box = document.querySelector(".portfolio-box"); // 포트폴리오 틀
var portfolio = document.querySelectorAll(".portfolio-item"); // 포트폴리오

var currentX = []; // 각각 포트폴리오의 현재 x축
var currentY = []; // 각각 포트폴리오의 현재 y축

var x = 111.3; // x축 기준점

function showPortfolio(type) {
  var y = 0; // y축
  var abled = 0; // 화면에 표시될 포트폴리오

  var height; // 포트폴리오 틀 height

  // 반응형은 width를 이용할 예정
  //     console.log(screen.width);
  //     console.log(document.body.clientWidth);

  for (var i = 0; i < portfolio.length; i++) {
    var portfolio_class = [];

    for (var j = 0; j < portfolio[i].classList.length; j++)
      portfolio_class.push(portfolio[i].classList[j]);

    console.log(portfolio_class);

    if (portfolio_class.indexOf(type) !== -1) {
      console.log(portfolio[i]);
      portfolio[i].setAttribute(
        "style",
        "transform: translate(" +
          (abled % 3) * x +
          "%," +
          y * 110 +
          "%) scale(1,1); opacity: 1;"
      );
      currentX[i] = (abled % 3) * x;
      currentY[i] = y * 110;
      abled++;
    } else {
      portfolio[i].setAttribute(
        "style",
        "transform: translate(" +
          currentX[i] +
          "%," +
          currentY[i] +
          "%) scale(0.1,0.1); opacity: 0;"
      );
    }

    if (abled > 2) {
      y = 1;
    }
  }

  height = Math.floor((abled - 1) / 3) + 1;

  portfolio_box.setAttribute("style", "height : " + height * 326 + "px;");
}

showPortfolio("all");
