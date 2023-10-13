import { MemoryGame } from './memorygame.js'
/*const gameData = [
  {id: 1, image: 'black-panther.webp' },
  {id: 2, image: 'captain-america.webp' },
  {id: 3, image: 'captain-marvel.webp' },
  {id: 4, image: 'groot.webp' },
  {id: 5, image: 'incredible-hulk.webp'},
  {id: 6, image: 'iron-man.webp' },
  {id: 7, image: 'spiderman.webp' },
  {id: 8, image: 'thor.webp'}
];

let game = new MemoryGame(gameData, false);

game.start();

console.log(game.guess(0));
console.log(game.guess(8));
console.log(game.guess(0));
console.log(game.guess(8));*/

let testGameData = [{id: 1, image: 'black-panther.webp'}];
let game = new MemoryGame(testGameData);

game.start();

game.guess(0);
let moveOne = game.guess(1);

console.log(moveOne);
console.log(game.gameData);
console.log(game.matchedItemsIds);
console.log(game.originalGameDataLength);