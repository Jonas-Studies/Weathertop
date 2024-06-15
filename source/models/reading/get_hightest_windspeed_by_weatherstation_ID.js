import * as database from '../../database/database.js'

export default async function (weatherstation_ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select max("windspeed_in_kmh") from weathertop.readings where "weatherstation_ID" = $1::integer',
			[ weatherstation_ID ]
		)

		if (query.rowCount === 1) {
			result = query.rows[0].max

			console.info("Loaded hightest windspeed for weatherstation by ID")
			console.debug(result)
		}
		else {
			console.error("Could not find highest windspeed for weatherstation by ID")
			console.debug(weatherstation_ID)
		}
	}
	catch (error) {
		console.error("Failed to load highest windspeed for weatherstation by ID")
		console.debug(weatherstation_ID)
	}

	return result
}
