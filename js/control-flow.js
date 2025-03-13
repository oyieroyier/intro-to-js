// If statement

let age = 20;

// If-else statement
/* if (age < 18) {
	console.log("I hate you like I'm young!");
} else if (age > 18) {
	console.log('I want it all!');
} else if (age === 18) {
	console.log('Turn the TV Off!!');
} */
// Else-if ladder

const grade = 280;

function calculateGrade(marks) {
	if (marks > 100 || marks < 0) {
		return 'Please enter a valid grade';
	} else if (marks >= 80) {
		return 'A';
	} else if (marks >= 75) {
		return 'A-';
	} else if (marks > 70) {
		return 'B';
	} else if (marks > 60) {
		return 'C';
	} else {
		return 'Umebant!';
	}
}

// Switch statement
function calculateGradeUsingSwitch(marks) {
	switch (true) {
		case marks > 100 || marks < 0:
			return 'Please enter a valid grade';

		case marks >= 80:
			return 'A';

		case marks >= 75:
			return 'A-';

		default:
			return 'Umebant!';
	}
}

// console.log(calculateGradeUsingSwitch(81));

// Ternary operator
const miaka = 28;

const favoriteArtist =
	miaka < 18
		? 'K Dot'
		: miaka === 18
		? 'BBL Drizzy'
		: miaka > 20
		? 'J Cole'
		: 'Pusha T';

let favMsanii;

if (miaka <= 18) {
	favMsanii = 'K Dot';
} else {
	favMsanii = 'BBL Drizzy';
}
// console.log(favMsanii);

// While loop

function whatIsTheCount(initialNumber, finalNumber) {
	while (initialNumber < finalNumber) {
		console.log('We are now at number: ', initialNumber);
		initialNumber++;
	}
}

// console.log("This is from the while loop: ", whatIsTheCount(15, 15));

// Do-while loop

function doWhileDemo(initialNumber, finalNumber) {
	do {
		console.log('We are now at number: ', initialNumber);
		initialNumber++;
	} while (initialNumber < finalNumber);
}

// console.log("This is from the do While demo:", doWhileDemo(15, 15));

// For loop
for (let initialCount = 0; initialCount < 10; initialCount++) {
	console.log('We are now at number: ', initialCount);
}

// For...in loop (for objects)

// For...of loop (for arrays and iterables)
const arr = ['Lucky', 'Brian', 'Hafsa', 'Kassim', 'Yvonne'];

console.log(typeof arr);

for (const name of arr) {
	console.log('The student in the current iteration is:', name);
}

// Break statement to exit a loop early

// Continue statement to skip an iteration in a loop
