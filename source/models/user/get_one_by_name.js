import * as database from '../../database/database.js'

import get_new_user from './get_one_new.js'

export default async function (name) {
	var result = undefined

	try {
		const query = await database.query(
			'Select * from weathertop.users where "name" = $1::varChar',
			[ name ]
		)

		if (query.rowCount === 1) {
			const row = query.rows[0]

			result = get_new_user(row.ID, row.name, row.password)

			console.info("Loaded user for name")
		}
		else {
			console.error("Could not find user for name")
		}
	}
	catch {
		console.error("Failed to load user")
	}

	return result
}
