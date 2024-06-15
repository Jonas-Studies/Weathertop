import * as database from '../../database/database.js'

export default async function (weatherstation_ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select min("temperature_in_degrees") from weathertop.readings where "weatherstation_ID" = $1::integer',
			[ weatherstation_ID ]
		)

		if (query.rowCount === 1) {
			result = query.rows[0].min

			console.info("Loaded lowest temperature for weatherstation by ID")
			console.debug(result)
		}
		else {
			console.error("Could not find lowest temperature for weatherstation by ID")
			console.debug(weatherstation_ID)
		}
	}
	catch (error) {
		console.error("Failed to load lowest temperature for weatherstation by ID")
		console.debug(weatherstation_ID)
	}

	return result
}
