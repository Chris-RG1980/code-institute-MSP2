import { MemoryGame } from './memorygame.js'
const gameData = [
  {id: 1, image: '/assets/images/black-panther.webp' },
  {id: 2, image: '/assets/images/captain-america.webp' },
  {id: 3, image: '/assets/images/captain-marvel.webp' },
  {id: 4, image: '/assets/images/groot.webp' },
  {id: 5, image: '/assets/images/incredible-hulk.webp'},
  {id: 6, image: '/assets/images/iron-man.webp' },
  {id: 7, image: '/assets/images/spiderman.webp' },
  {id: 8, image: '/assets/images/thor.webp'}
];

let game = new MemoryGame(gameData);
let selectionReset = false;

setupGame();

function setupGame() {
  for (let i = 0; i < game.gameData.length; i++) {
    $(".game-container").append(`<div class="game-item shake"></div>`);
  };
  addEventListeners();
  game.start();
};

function addEventListeners() {
  $(".game-item").click(gameItemClick);
}

function gameItemClick() {
  if (selectionReset) {
    $(".game-item.clicked").css("background-image", `url(/assets/images/question-mark.webp)`).removeClass("clicked");
  };
  $(this).addClass("clicked");
  let gameItemPosition = $(this).index();
  let gameGuess = game.guess(gameItemPosition);
  selectionReset = gameGuess.isMaxAmountOfGuesses && !gameGuess.isMatch;
  let gameItem = gameGuess.originalGuessedItems.find(x => x.position == gameItemPosition);
  $(this).css("background-image", `url(${gameItem.image})`);
  if (gameGuess.isMatch) {
    $(".game-item.clicked").removeClass("clicked").addClass("matched");
  }
  console.log(gameGuess.isGameWon);
}

