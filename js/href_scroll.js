// Nav 버튼을 누를 경우 스크롤 이동 Javascript
var scrollEle = document.documentElement; // 전체 페이지의 위치 추출을 위한 변수
var menu = document.querySelector(".nav-menu");
var href_scroll = function (target) {
  var targetEle = document.querySelector(target); // 목표 Element
  if (!targetEle) return;

  if (scrollEle.offsetWidth <= 1024) menu.style.height = "0px";

  var currentY = scrollEle.scrollTop; // 현재 Y축
  var targetY = targetEle.offsetTop; // 목표 Y축

  animateScrollTo(currentY, targetY);

  function animateScrollTo(startY, endY) {
    var duration = 600; // 딜레이
    var unitY = (endY - startY) / duration; // 초당 이동하고자 하는 y축 길이
    var startTime = new Date().getTime();
    var endTime = new Date().getTime() + duration;

    console.log(endY, unitY);

    var scrollTo = function (startTime, endTime, startY, unitY, endY) {
      var now = new Date().getTime();
      var passed = now - startTime;
      if (now <= endTime) {
        scrollEle.scrollTop = startY + unitY * passed;
        // 재귀 함수로 반복 호출
        window.requestAnimationFrame(function () {
          scrollTo(startTime, endTime, startY, unitY, endY);
        });
      } else {
        scrollEle.scrollTop = endY;
        console.log("End off.");
      }
    };

    // 화면에 새로운 애니메이션을 알리고 리페인트가 진행되기 전 애니메이션을 호출
    window.requestAnimationFrame(function () {
      scrollTo(startTime, endTime, startY, unitY, endY);
    });
  }
};
