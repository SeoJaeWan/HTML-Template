var scrollEle = document.documentElement || window.scrollingElement;

var href_scroll = function (target, duration) {
  var targetEle = document.querySelector(target);
  if (!targetEle) return;

  var currentY = scrollEle.scrollTop;
  var targetY = targetEle.offsetTop;

  animateScrollTo(currentY, targetY, duration);

  function animateScrollTo(startY, endY, duration) {
    var duration = duration ? duration : 600;
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
