class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  getAvailability() {
    if(this.numCopies === 0){
      return 'Out of stock';
    } else if (this.numCopies < 10) {
      return 'Low stock';
    }
    return 'In stock';
  }

  sell(numCopiedSold = 1) {
    this.numCopies -= numCopiedSold;
  }

  restock(numCopiedSold = 5) {
    this.numCopies += numCopiedSold;
  }
}

const paintedMan = new Book ("The painted man", "Peter V Brett", 123456, 5);

console.log(paintedMan);

console.log(paintedMan.getAvailability());

paintedMan.restock(12);

console.log(paintedMan.getAvailability());

paintedMan.sell(17);

console.log(paintedMan.getAvailability());
