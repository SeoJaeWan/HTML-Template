// 스크롤 전환 시 네비게이션 버튼 활성화 변경

var scroll_button = document.querySelector(".nav-scroll-button");
var article = document.querySelectorAll("article");
var nav_item = document.querySelectorAll(".nav-menu-item");
var beforeArticle = 0;

// 스크롤 이벤트 생성
document.addEventListener("scroll", scrollEvent);

function scrollEvent() {
  var documentY = document.documentElement.scrollTop;
  // 현재 어느 Article에 있는지 확인
  var currentArticle = getCurrentArticle(documentY);

  // 이전 Article과 같지 않다면 네비게이션 활성화 수정
  if (currentArticle !== beforeArticle) {
    nav_item[currentArticle].classList.add("nav-active");
    nav_item[beforeArticle].classList.remove("nav-active");

    // 현재 Article을 beforeArticle에 넣음
    beforeArticle = currentArticle;
  }

  // 현재 Y 가 200 이상이라면 최상단으로 올라가는 버튼 화면에 표시
  // 아닐 경우 화면에서 제거
  if (documentY > 200)
    scroll_button.setAttribute(
      "style",
      "opacity : 1; transform: translateY(-10px)"
    );
  else
    scroll_button.setAttribute(
      "style",
      "opacity : 0; transform: translateY(10px)"
    );
}

function getCurrentArticle(documentY) {
  var after = 1;

  for (var i = 0; i < article.length; i++) {
    if (
      i === 6 ||
      (article[i].offsetTop <= documentY + 70 &&
        documentY < article[after].offsetTop - (i === 5 ? 130 : 69))
    ) {
      return i;
    }
    after++;
  }
}

// 새로고침 및 최초 렌더링 시 현재 Y 좌료를 가지고 네비게이션 업데이트
scrollEvent();
