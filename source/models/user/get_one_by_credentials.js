import * as database from '../../database/database.js'

import get_new_user from './get_one_new.js'

export default async function (name, password) {
	let result = undefined

	try {
		const query = await database.query(
			'Select * from weathertop.users where "name" = $1::varChar and "password" = $2::varChar fetch first row only',
			[ name, password ]
		)

		if (query.rowCount === 1) {
			const row = query.rows[0]

			result = get_new_user(row.ID, row.name, row.password)

			console.info("Loaded user for credentials")
			console.debug(result)
		}
		else {
			console.error("Could not find user for credentials")
			console.debug({ name: name, password: password })
		}
	}
	catch (error) {
		console.error("Failed to load user")
		console.debug(error)
	}

	return result
}
