import get_user_by_credentials from '../models/user/get_one_by_credentials.js'

export async function display_login_page (request, response, next) {
	response.render('login')
}

export async function display_registration_page (request, response, next) {
	response.render('register')
}

export async function create_session (request, response, next) {
	const username = request.query.username
	const password = request.query.password

	var result = false

	if (username != undefined && password != undefined) {
		const user = await get_user_by_credentials(username, password)

		if (user != undefined) {
			request.session.key = user.ID

			console.log(user.ID)
		}
	}

	response.send({ login_successfull: result })
}

export async function destroy_session (request, response, next) {
	request.session.destroy()

	response.redirect('/login')
}
