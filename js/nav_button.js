var menu = document.querySelector(".nav-menu");
var toggle = true;
function showMenu() {
  if (toggle) menu.style = "height : 270px;";
  else menu.style = "height : 0px;";

  toggle = !toggle;
}
