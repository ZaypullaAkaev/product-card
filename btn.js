const btnRepaintFirstCard = document.querySelector(".btn-repaint-first-card");

btnRepaintFirstCard.addEventListener("click", () => {
  const firstCard = document.querySelector(".card");
  firstCard.style.backgroundColor = "aqua";
  console.log("Цвет первой карточки изменен на aqua");
});

const btnRepaintAllCards = document.querySelector(".btn-repaint-all-cards");

btnRepaintAllCards.addEventListener("click", () => {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.style.backgroundColor = "lime";
    console.log("Цвет всех карточек изменен на lime");
  });
});

const btnOpenGoogle = document.querySelector(".btn-open-google");

btnOpenGoogle.addEventListener("click", openGooglePage);
function openGooglePage() {
  const answer = confirm("Вы действительно хотите открыть страницу Google?");
  if (answer === true) {
    window.open("https://www.google.com", "_blank");
    console.log("Страница Google.com открыта в новой вкладке");
  } else {
    return;
  }
}

const btnOutputConsoleLog = document.querySelector(".btn-output-console-log");

btnOutputConsoleLog.addEventListener("click", () => outputConsoleLog("Сообщение выведено в консоль лог"));
function outputConsoleLog(message) {
  console.log(message);
}

const titleElement = document.querySelector(".title");

titleElement.addEventListener("mouseover", function () {
  console.log(titleElement.textContent);
});

const btnToggle = document.querySelector(".btn-toggle");

btnToggle.addEventListener("click", () => {
  btnToggle.classList.toggle("active");
});
