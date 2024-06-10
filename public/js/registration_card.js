function register_user () {
	const name = get_name_from_userinput()
	const password = get_password_from_userinput()
	const repeatedPassword = get_repeatedPassword_from_userinput()

	if (name != undefined && password != undefined && repeatedPassword != undefined) {
		if (password === repeatedPassword) {
			fetch_registration_request(name, password)
	
			console.info("Registration completed")
		}
		else {
			console.error("Passwords need to be the same")
		}
	}
	else {
		console.error("Registration failed")
	}
}

function get_name_from_userinput () {
	var result = undefined

	const input_field = document.getElementById("register-user-input-name")

	if (input_field != undefined) {
		if (input_field.value !== "") {
			result = input_field.value

			console.info("Loaded the name")
		}
		else {
			console.error("Name cant be empty")
		}
	}
	else {
		console.debug("Failed to load a name")
	}

	return result
}

function get_password_from_userinput () {
	var result = undefined

	const input_field = document.getElementById("register-user-input-password")

	if (input_field != undefined) {
		if (input_field.value !== "") {
			result = input_field.value

			console.info("Loaded the password")
		}
		else {
			console.error("Password cant be empty")
		}
	}
	else {
		console.debug("Failed to load a password")
	}

	return result
}

function get_repeatedPassword_from_userinput () {
	var result = undefined

	const input_field = document.getElementById("register-user-input-repeat-password")

	if (input_field != undefined) {
		if (input_field.value !== "") {
			result = input_field.value

			console.info("Loaded the password")
		}
		else {
			console.error("Repeated password cant be empty")
		}
	}
	else {
		console.debug("Failed to load a repeated password")
	}

	return result
}

async function fetch_registration_request (name, password) {
	await fetch(
		"http://localhost:3000/user/insert_one",
		{
			method: "POST",
			body: JSON.stringify(
				{
					name: name,
					password: password
				}
			),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
		}
	)
		.then((response) => console.info("Reading created"))
		.then((error) => console.error(error))
}
