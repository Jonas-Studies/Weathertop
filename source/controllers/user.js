import is_username_valid from '../models/user/is_username_valid.js'
import is_password_valid from '../models/user/is_password_valid.js'
import insert_new_user from '../models/user/insert_one_new.js'
import get_user_by_name from '../models/user/get_one_by_name.js'

export async function insert_one_new (request, response, next) {
	console.info("Recieved request to create user")

	const username = request.body.name
	const password = request.body.password

	let result = 400

	if (is_username_valid(username) === true && is_password_valid(password) === true) {
		if (get_user_by_name != undefined) {
			await insert_new_user(
				username,
				password
			)

			console.info('Registrated new user')

			result = 200
		}
		else {
			console.error('User for registration already exists')
			console.debug(username)
		}
	}
	else {
		console.error('Invalid parameters for request')
		console.debug(request.body)
	}

	response.sendStatus(result)
}

export async function is_name_existing (request, response, next) {
	console.info("Recieved request if username is existing")

	const username = request.body.username

	var result = 400
	var is_username_existing = false

	if (is_username_valid(username) === true) {
		if (await get_user_by_name(username) != undefined) {
			is_username_existing = true
		}
		
		result = 200
	}
	else {
		console.error('Invalid parameters for request')
		console.debug(request.body)
	}

	response.status(result).json({ result: is_username_existing })
}
