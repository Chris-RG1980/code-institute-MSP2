class MemoryGame {

  constructor(gameData) {
    if (!(gameData instanceof Array)) {
      throw new Error('Parameter is not an Array!');
    }
    this.gameData = this.duplicateArray(gameData);
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

  guess() {

  }

  reset() {

  }

  end() {

  }
};