// Create a string using single quotes
'This is a string with a single quote';

// Create a string using double quotes
'This is a string with a double quote';

// Create a string using template literals (backticks)
`This is a string with backticks`;

// String concatenation using +
console.log('Hello' + ', ' + 'Moringa');

// String concatenation using template literals
const name = 'Moringa';
console.log(`I go to ${name} School`);

// Find the length of a string
const password = 'haha';

if (password.length < 8) {
	console.log('Password must be 8 characters long!');
}

// Convert a string to uppercase
console.log('hello'.toUpperCase());

// Convert a string to lowercase
console.log('HELLO'.toLowerCase());

// Remove whitespace from a string
let person = 'Evans ';
console.log(person.trim());

// Access characters in a string using index notation
console.log(person[0]);

// Find the index of a substring

// Extract a substring using slice()
const mtu = person.slice(1, 3);
console.log(mtu);

// Extract a substring using substring()
const someSentence =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem illo assumenda adipisci fugit recusandae minima animi itaque aut, quia nam labore doloribus in. Illo nihil minima veniam reprehenderit voluptatibus?';

console.log(someSentence.substring(0, 100));

console.log(someSentence.charAt(100));

// Replace a part of a string using replace()
console
	.log
	// person.replace(searchValue, replaceValue)
	();

person = [1, 2, 3, 4, 5];
console.log(person);

// Split a string into an array using split()
const email = 'richard.wasonga@moringaschool.com';
const nameSection = email.split('@')[0].split('.').join(' ').toUpperCase();
console.log(nameSection);

// Join an array into a string using join()

// Repeat a string using repeat()

// Check if a string includes a substring using includes()

// Check if a string starts with a certain character using startsWith()

// Check if a string ends with a certain character using endsWith()

// const student = "Sarah"
// const student2 = new String("newton")

// console.log(student);
// console.log(student2.valueOf());
