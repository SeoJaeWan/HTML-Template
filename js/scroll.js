var scroll_button = document.querySelector(".nav-scroll-button");

document.addEventListener("scroll", function () {
  var documentY = document.documentElement.scrollTop;

  if (documentY > 200)
    scroll_button.style = "opacity : 1; transform: translateY(-10px)";
  else scroll_button.style = "opacity : 0; transform: translateY(10px)";
});
