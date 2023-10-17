import { MemoryGame } from './memorygame.js'
const gameData = [
  {id: 1, image: '/assets/images/black-panther.webp' },
  {id: 2, image: '/assets/images/captain-america.webp' },
  {id: 3, image: '/assets/images/captain-marvel.webp' },
  {id: 4, image: '/assets/images/groot.webp' },
  {id: 5, image: '/assets/images/hulk.webp'},
  {id: 6, image: '/assets/images/iron-man.webp' },
  {id: 7, image: '/assets/images/spiderman.webp' },
  {id: 8, image: '/assets/images/thor.webp'}
];

let game = new MemoryGame(gameData);
let selectionReset = false;
let isGameStarted = false;
let isGameWon = false;
const timer = new Timer();

setupGame();

function setupGame() {
  for (let i = 0; i < game.gameData.length; i++) {
    $(".game-container").append(`<div class="game-item shake"></div>`);
  };
  addEventListeners();
  game.start();
  totalGuess(0);
  totalMatches(0);
};

function addEventListeners() {
  $(".game-item").click(gameItemClick);
  $("#reset-button").click(resetGame);
  setInterval(() => {
    let timeInMinutes = Math.floor(timer.getTime() / 60000).toString().padStart(1, "0");
    let timeInSeconds = ((timer.getTime() % 60000) / 1000).toFixed(0).toString().padStart(2, "0");
    $('.total-time').text(`${timeInMinutes}:${timeInSeconds}`);
  }, 100)
  
}

function gameItemClick() {

  if (isGameWon) {
    return;
  }

  if (!isGameStarted) {
    isGameStarted = true;
    timer.start();
  }

  if (selectionReset) {
    $(".game-item:not(.matched)").css("background-image", `url(/assets/images/question-mark.webp)`).removeClass("clicked");
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

  totalGuess(gameGuess.numberOfGuessesTaken);
  totalMatches(gameGuess.matchScore);

  if (gameGuess.isGameWon) {
    isGameWon = true;
    timer.stop();
  }
}

// Displays the total amount of guesses the user takes to complete the game.
function totalGuess(numberOfGuessesTaken) {
  $(".guess-total").text(numberOfGuessesTaken);
}

 // Displays the total amount of matches.
function totalMatches(matchScore) {
  $(".match-total").text(`${matchScore}/${game.originalGameDataLength}`);
}

// Function to reset the game.
function resetGame() {
  $(".game-item").css("background-image", `url(/assets/images/question-mark.webp)`).removeClass("matched");
  game.reset();
  timer.reset();
  totalGuess(0);
  totalMatches(0);
  isGameWon = false;
  isGameStarted = false;
}

