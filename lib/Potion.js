class Potion {
  constructor(name) {
    this.types = ['strength', 'agility', 'health'];
    //This is loop to define the array value of the types for the name if the name is not given.
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
      return this.value;
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
      return this.value;
    }
  }
}

module.exports = Potion;