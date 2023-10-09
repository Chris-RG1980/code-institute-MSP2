const gameData = [
  {id: 1, image: 'black-panther.webp' },
  {id: 2, image: 'captain-america.webp' },
  {id: 3, image: 'captain-marvel.webp' },
  {id: 4, image: 'groot.webp' },
  {id: 5, image: 'incredible-hulk.webp'},
  {id: 6, image: 'iron-man.webp' },
  {id: 7, image: 'spiderman.webp' },
  {id: 8, image: 'thor.webp'}
];

let game = new MemoryGame(123);

game.start();