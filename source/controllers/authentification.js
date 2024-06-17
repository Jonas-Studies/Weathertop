import get_user_by_credentials from '../models/user/get_one_by_credentials.js'
import is_username_valid from '../models/user/is_username_valid.js'
import is_password_valid from '../models/user/is_password_valid.js'

export async function display_login_page (request, response, next) {
	response.render('login')
}

export async function display_registration_page (request, response, next) {
	response.render('register')
}

export async function create_session (request, response, next) {
	const username = request.body.username
	const password = request.body.password

	var result = false

	console.info('Recieved request to create session')

	if (is_username_valid(username) === true && is_password_valid(password) === true) {
		const user = await get_user_by_credentials(username, password)

		if (user != undefined) {
			request.session.key = user.ID

			result = true
		}
	}
	else {
		console.error('Invalid parameters for request')
		console.debug(request.body)
	}

	response.send({ login_successfull: result })
}

export async function destroy_session (request, response, next) {
	request.session.destroy()

	response.redirect('/login')
}
