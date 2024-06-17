import insert_new_user from '../models/user/insert_one_new.js'
import get_user_by_name from '../models/user/get_one_by_name.js'

export async function insert_one_new (request, response, next) {
	console.info("Recieved request to create user")
	console.debug(request.body)

	await insert_new_user(
		request.body.name,
		request.body.password,
	)

	response.send(200)
}

export async function is_name_existing (request, response, next) {
	console.info("Recieved request if username is existing")
	console.debug(request.query)

	var result = false

	const username = request.body.username

	if (await get_user_by_name(username) != undefined) {
		result = true
	}

	response.status(200).json({ result: result })
}
