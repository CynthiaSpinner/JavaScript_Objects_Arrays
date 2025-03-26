console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//This is a function that takes an array of numbers and returns the sum of those numbers using the forEach method.
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


