const form = document.querySelector('.form_container');


form.addEventListener('submit', logInUser);


const emailInput = form[0];
const passwordInput = form[1];

function logInUser(e) {
	e.preventDefault();
	const submittedEmail = emailInput.value;
	const submittedPassword = passwordInput.value;

	if (submittedPassword.trim().length < 8) {
		alert('Password must be 8 characters long!');
		return;
	}

	alert(
		`Your email is: ${submittedEmail}\nAnd your password is ${submittedPassword}`
	);

	greetLoggedInUser(submittedEmail);
}

const greeting = document.querySelector('.greeting');

function greetLoggedInUser(email) {
	const nameSection = email.split('@')[0].split('.').join(' ').toUpperCase();
	greeting.textContent = `Good Afternoon, ${nameSection}.`;
}