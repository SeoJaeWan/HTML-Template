var scrollEle = document.documentElement || window.scrollingElement;

var href_scroll = function (target) {
  console.log(target);
  var targetEle = document.querySelector(target);
  if (!targetEle) return;

  var currentY = scrollEle.scrollTop;
  var targetY = targetEle.offsetTop;

  console.log(targetY);
  animateScrollTo(currentY, targetY);

  function animateScrollTo(startY, endY) {
    var duration = 600;
    var unitY = (endY - startY) / duration;
    var startTime = new Date().getTime();
    var endTime = new Date().getTime() + duration;

    console.log(endY, unitY);

    var scrollTo = function (startTime, endTime, startY, unitY, endY) {
      var now = new Date().getTime();
      var passed = now - startTime;
      if (now <= endTime) {
        scrollEle.scrollTop = startY + unitY * passed;
        window.requestAnimationFrame(function () {
          scrollTo(startTime, endTime, startY, unitY, endY);
        });
      } else {
        scrollEle.scrollTop = endY;
        console.log("End off.");
      }
    };
    window.requestAnimationFrame(function () {
      scrollTo(startTime, endTime, startY, unitY, endY);
    });
  }
};
