var menu = document.querySelector(".nav-menu");

function showMenu() {
  console.log(menu.offsetWidth);
  if (menu.offsetHeight == 0) menu.style.height = "315px";
  else menu.style.height = "0px";

  toggle = !toggle;
}
