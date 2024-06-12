import * as database from '../../database/database.js'

export default async function (user_ID, weatherstation_ID) {
	try {
		await database.query(
			'Insert into weathertop.user_owns_weatherstations ("user_ID", "weatherstation_ID") values ($1::integer, $2::integer)',
			[ user_ID, weatherstation_ID ]
		)
		
		console.info("Connected user with inserted weatherstation")
	}
	catch {
		console.log("Failed to connect user and weatherstation")
	}
}
