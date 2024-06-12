async function login_user () {
	const name = get_name_from_userinput()
	const password = get_password_from_userinput()

	if (name != undefined && password != undefined) {
		if (await is_username_existing(name) === true) {
			if (await login(name, password) === true) {
				window.location.href = '/dashboard'
			}
		}
		else {
			console.error("No user found for login")
		}
	}
	else {
		console.error("Login failed")
	}
}

function get_name_from_userinput () {
	var result = undefined

	var input_field = document.getElementById("login-user-input-name")

	if (input_field != undefined) {
		result = input_field.value

		console.info("Loaded the users name")
	}
	else {
		console.error("Failed to load the users name")
	}

	return result
}

function get_password_from_userinput () {
	var result = undefined

	var input_field = document.getElementById("login-user-input-password")

	if (input_field != undefined) {
		result = input_field.value

		console.info("Loaded the users password")
	}
	else {
		console.error("Failed to load the users password")
	}

	return result
}

async function is_username_existing (name) {
	var result = false

	const response = await fetch(
		"http://localhost:3000/user/is_username_existing?username=" + name,
		{ method: "GET" }
	)
	
	if (response.status = 200) {
		const data = await response.json()
		result = data.result

		if (data.result = true) {
			console.info("Username is existing")
		}
		else {
			console.info("Username is not existing")
		}
	}
	else {
		console.error("Failed to request if username is existing")
	}

	return result
}

async function login (username, password) {
	var result = undefined

	const response = await fetch (
		"http://localhost:3000/login?username=" + username + "&password=" + password,
		{ method: "POST" }
	)

	if (response.status = 200) {
		const data = await response.json()
		console.debug(data)	
		result = data.login_successfull

		if (data.login_successfull = true) {
			console.info("Login successfull")
		}
		else {
			console.info("Login not successfull")
		}
	}
	else {
		console.error("Failed to login")
	}

	return result
}
