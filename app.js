console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//This is a function that takes an array of numbers and returns the sum of those numbers using the reduce method.
function arraySum(numbers) {
    let sum = 0;

    numbers.forEach((number) => {
        sum += number;
    });

    return sum;
}

const numbers = [2, 22, 12, 17, 18, 39, 129];
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

//This is the book object that has a method that returns the book's information.
const book = {};
book.title = "Dante's Paradiso";
book.author = "Dante Alighieri";
book.pages = 432;
book.readCount = 1;

book.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} time${this.readCount > 1 ? 's' : ''}.`;
};

console.log(book.info());

console.log("EXERCISE 3:\n==========\n");

//This is a function that takes a string and returns the string reversed.
let sentence = "The quick brown fox jumps over the lazy dog";

let reversedSentence = sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

console.log(reversedSentence);

console.log("EXERCISE 4:\n==========\n");
console.log("EXERCISE 5:\n==========\n");
