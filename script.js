const card = [
  "1",
  "1",
  "2",
  "2",
  "3",
  "3",
  "4",
  "4",
  "5",
  "5",
  "5",
  "6",
  "6",
  "7",
  "7",
  ,
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
  for (let i = array.leght - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i = 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createboard() {
  const gameBoard = document.querySelector(".gambe-board");
  shuffle(cards);
  cards.forEach((card) => {
    const cardElement = document.createElement("div");

    cardElement.classList.add("card");
    cardElement.dataset.icon = card;

    cardElement.addEventListener("click, flipCard");

    gameBoard.appendChild(cardElement);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");
  this.textContent = this.dataset.icon;

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  checkforMatch();
}

function checkForMatch() {
  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);

  secondCard.removeEventListener("click", flipCard);
  resetboard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flipped");

    secondCard.classList.rmove("flipped");
    firstCard.textContent = "";
    secondCard.textContent = "";
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}
document.getElementById("reset-button").addEventListener("click", () => {
  document.querySelector("game-board").innerHTML = "";
  createboard();
});
crea;
