class MemoryGame {

  guessedItems = [];
  minPositionGuess = 0;
  matchedItemsIds = [];

  constructor(gameData) {
    if (!(gameData instanceof Array)) {
      throw new Error('Parameter is not an Array!');
    }
    this.gameData = this.duplicateArray(gameData);
    this.maxPositionGuess =  this.gameData.length - 1;
    this.originalGameDataLength = gameData.length;
  }

  start() {
    this.gameData = this.randomiseArray(this.gameData);
  }

  duplicateArray(array) {
    array.push(...array.slice());
    return array;
  }

  //Credit: Fisher-Yates Sorting Algorithm https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  randomiseArray(array) {
    for (let i = 0; i < array.length; i++) {
      let randomPosition = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      // swap items
      array[i] = array[randomPosition];
      array[randomPosition] = temp;
    }
    return array;
  }

  guess(position) {
    if (position < this.minPositionGuess || position > this.maxPositionGuess) {
      throw new Error(`Position needs to be between ${this.minPositionGuess} & ${this.maxPositionGuess}`)
    }
    let item = this.gameData[position];
    this.guessedItems.push(item);

    let guessedItemsMaxLength = this.guessedItems.length === 2;

    let isMatch = guessedItemsMaxLength && 
      this.guessedItems[0].id === this.guessedItems[1].id;

    if (isMatch && !this.matchedItemsIds.includes(this.guessedItems[0].id)) {
      this.matchedItemsIds.push(this.guessedItems[0].id);
    }

    let originalGuessedItems = this.guessedItems.slice();

    if (guessedItemsMaxLength) {
      this.guessedItems = [];
    }

    let isGameWon = this.matchedItemsIds.length === this.originalGameDataLength;

    return {
      originalGuessedItems, 
      isMatch,
      isGameWon
    }
  }

  reset() {

  }

  end() {

  }
};