// Define a function using the function keyword
identifyTheUser('Bob');

function identifyTheUser(name = 'Instagrammer') {
	console.log(`Good Morning, ${name}.`);
}

// Call a function
identifyTheUser('Mercy');
identifyTheUser();
identifyTheUser('Sarah');

// Define an arrow function
const identifyTheUserAgain = (name = 'TikToker') => {
	return name;
};

const huyuNiNani = identifyTheUserAgain('Sudaaaaah');
// console.log(huyuNiNani);

// Function with parameters and return values

// Default parameters in a function

// Function expression vs function declaration

// Immediately Invoked Function Expressions (IIFE)
(function identifyTheUser(name = 'Instagrammer') {
	console.log(`Good Morning, ${name}.`);
})("Lucky")

// Higher-order functions (functions that take functions as arguments)

// Demonstrate callback functions

// Pure vs impure functions

function add(a, b) {
	return a + b
}

console.log(add(11, 23));


// How functions can return other functions
function sayHiToTheUser(name) {
	console.log(`Hello, ${name}`);
}

const influensa = sayHiToTheUser(huyuNiNani);

function askUsersAge(name) {
	console.log(`What is your age, ${name}?`);
}
//  const ulizaMiaka = askUsersAge(huyuNiNani)
