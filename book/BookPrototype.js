function Book(title, author, ISBN, numCopies) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.numCopies = numCopies;
}

// Declare this function on prototype because we don't want to create a new instance each time we want to create an object:

Book.prototype.getAvailability = function () {
  if(this.numCopies === 0){
    return 'Out of stock';
  } else if (this.numCopies < 10) {
    return 'Low stock';
  }
  return 'In stock'
}

Book.prototype.sell = function (numCopiedSold = 1) {
  // Each time we sold a copy, this will take minus one from total.
  this.numCopies -= numCopiedSold;
}

Book.prototype.restock = function (numCopiedSold = 5) {
  // Each time we sold a copy, this will take minus one from total.
  this.numCopies += numCopiedSold;
}

const paintedMan = new Book ("The painted man", "Peter V Brett", 123456, 5);

console.log(paintedMan);

console.log(paintedMan.getAvailability());

paintedMan.restock(12);

console.log(paintedMan.getAvailability());

paintedMan.sell(17);

console.log(paintedMan.getAvailability());
