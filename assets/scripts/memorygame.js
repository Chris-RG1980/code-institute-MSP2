class MemoryGame {

  guessedItems = []; // An array to store the two items that have been chosen.
  minPositionGuess = 0; // This is the lowest position that can be guessed.
  matchedItemsIds = []; // An array to store the ID of a correct match.

  constructor(gameData) {
    if (!(gameData instanceof Array)) {
      throw new Error('Parameter is not an Array!'); // An error will be displayed in the console if the game data passed in to the constructor is not an array. 
    }
    this.gameData = this.duplicateArray(gameData); // Call the duplicateArray function and creates an object to be used for this instance game.
    this.maxPositionGuess =  this.gameData.length - 1; // This is the highest position that can be guessed.
    this.originalGameDataLength = gameData.length; // The length of the original gameData array.
  }

  // Call the randomiseArray function to randomise the objects within the array for this instance of the game and assign it to itself.
  start() {
    this.gameData = this.randomiseArray(this.gameData);
  }

  // Copy the game data  array and add it to the existing game data array
  duplicateArray(array) {
    array.push(...array.slice());
    return array;
  }


  // Randomise the order of the objects within the array.
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
    // Check if selected position is higher than 0 and not higher than the array than this instance of the game data array length.
    if (position < this.minPositionGuess || position > this.maxPositionGuess) {
      throw new Error(`Position needs to be between ${this.minPositionGuess} & ${this.maxPositionGuess}`)
    }

    let item = this.gameData[position]; // Store the selected position in this instance of the gameData array.
    this.guessedItems.push(item); // Push the selected position into the guessedItems array. 

    let guessedItemsMaxLength = this.guessedItems.length === 2; // Check if only 2 guesses made. Returns Boolean.

    // If only 2 guesses made and the id's for each selected object match this is a match.
    let isMatch = guessedItemsMaxLength && 
      this.guessedItems[0].id === this.guessedItems[1].id; 

    // If a match is made and the id of the matched object is not in the matchedItemsIds add it. 
    if (isMatch && !this.matchedItemsIds.includes(this.guessedItems[0].id)) {
      this.matchedItemsIds.push(this.guessedItems[0].id); 
    }

    // Return a copy of this instance of the guessedItems array. 
    let originalGuessedItems = this.guessedItems.slice();

    // Clear this instance of the guessedItems array. 
    if (guessedItemsMaxLength) {
      this.guessedItems = [];
    }

    // If the length of this instance of the matchedItemsIds array is equal to this instance of the originalGameDataLength then the game is won.
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