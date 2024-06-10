import * as database from '../../database/database.js'

export default async function (user) {
	try {
		database.query(
			'Insert into weathertop.users ("ID", "name", "password") values (gen_random_uuid(), $1::varChar, $2::varChar)',
			[ user.name, user.password ]
		)
	}
	catch (error) {
		console.error("Failed to insert user")
		console.debug(error)
	}
}
