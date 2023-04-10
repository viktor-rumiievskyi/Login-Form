document.querySelector('.login'),addEventListener('submit', (e) => {
	e.preventDefault();

	const email = document.querySelector('#email_login')?.value;
	const password = document.querySelector('#password_login')?.value;

	console.log(`
	YOUR DATA
	Email: ${email},
	Password: ${password}
	`)
})