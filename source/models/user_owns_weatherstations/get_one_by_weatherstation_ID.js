import * as database from '../../database/database.js'

export default async function (weatherstation_ID, user_ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select * from weathertop.user_owns_weatherstations where "user_ID" = $1::integer and "weatherstation_ID" = $2::integer',
			[ user_ID, weatherstation_ID ]
		)

		if (query.rowCount === 1) {
			result = query.rows[0]

			console.info("User is owning weatherstation")
		}
		else {
			console.info("User is not owning weatherstation")
		}
	}
	catch (error) {
		console.error("Failed the query if user owns weatherstation")
		console.debug(error)
	}

	return result
}
