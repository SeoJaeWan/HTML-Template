var scroll_button = document.querySelector(".nav-scroll-button");
var article = document.querySelectorAll("article");
var nav_item = document.querySelectorAll(".nav-menu-item");
var beforeArticle = 0;

document.addEventListener("scroll", function () {
  var documentY = document.documentElement.scrollTop;
  var currentArticle = getCurrentArticle(documentY);

  console.log(currentArticle);

  if (currentArticle !== beforeArticle) {
    nav_item[currentArticle].classList.add("nav-active");
    nav_item[beforeArticle].classList.remove("nav-active");

    beforeArticle = currentArticle;
  }

  if (documentY > 200)
    scroll_button.style = "opacity : 1; transform: translateY(-10px)";
  else scroll_button.style = "opacity : 0; transform: translateY(10px)";
});

function getCurrentArticle(documentY) {
  var after = 1;

  for (var i = 0; i < article.length; i++) {
    console.log(
      i,
      article[i].offsetTop,
      documentY,
      article[after].offsetTop,
      article[i].offsetTop <= documentY,
      documentY < article[after].offsetTop - (i === 5 ? 130 : 0)
    );
    if (
      i === 6 ||
      (article[i].offsetTop <= documentY &&
        documentY < article[after].offsetTop - (i === 5 ? 130 : 0))
    ) {
      return i;
    }
    after++;
  }
}
