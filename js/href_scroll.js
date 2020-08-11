var scrollEle = document.documentElement || window.scrollingElement;

var href_scroll = function (target) {
  console.log(target);
  var targetEle = document.querySelector(target);
  if (!targetEle) return;

  var currentY = scrollEle.scrollTop;
  var targetY = targetEle.offsetTop + 15;

  console.log(targetY);
  animateScrollTo(currentY, targetY);

  function animateScrollTo(startY, endY) {
    var duration = 600;
    var unitY = (endY - startY) / duration;
    var startTime = new Date().getTime();
    var endTime = new Date().getTime() + duration;

    var scrollTo = function (startTime, endTime, startY, unitY) {
      var now = new Date().getTime();
      var passed = now - startTime;
      if (now <= endTime) {
        scrollEle.scrollTop = startY + unitY * passed;
        window.requestAnimationFrame(function () {
          scrollTo(startTime, endTime, startY, unitY);
        });
      } else {
        console.log("End off.");
      }
    };
    window.requestAnimationFrame(function () {
      scrollTo(startTime, endTime, startY, unitY);
    });
  }
};
