
//About スクロール時順番にチェックが入る//

const aboutSection = document.querySelector(".about");
const scanItems = document.querySelectorAll(".scanList li");

let scanStarted = false; //scanStarted指定→何度もスキャンせず1回のみ

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !scanStarted) {
        scanStarted = true;

        scanItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("isDone");
          }, index * 400);   
      });
    }
  });
},
  {
    threshold: 0.4,//0.4秒ずつ順番に変わる
  }
);

observer.observe(aboutSection);


// Page Top スライム化
const pageTop = document.querySelector(".pageTop");
const footer = document.querySelector(".footer");

const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      pageTop.classList.add("isSlime");
    } else {
      pageTop.classList.remove("isSlime");
    }
  });
});

footerObserver.observe(footer);

// Page Top クリック時
pageTop.addEventListener("click", (event) => {
  event.preventDefault();

  pageTop.classList.add("isMoving");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(() => {
    pageTop.classList.remove("isMoving");
  }, 900);
});