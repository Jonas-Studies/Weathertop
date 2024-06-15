import * as database from '../../database/database.js'

export default async function (weatherstation_ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select max("airpressure_in_hpa") from weathertop.readings where "weatherstation_ID" = $1::integer',
			[ weatherstation_ID ]
		)

		if (query.rowCount === 1) {
			result = query.rows[0].max

			console.info("Loaded hightest airpressure for weatherstation by ID")
			console.debug(result)
		}
		else {
			console.error("Could not find highest airpressure for weatherstation by ID")
			console.debug(weatherstation_ID)
		}
	}
	catch (error) {
		console.error("Failed to load highest airpressure for weatherstation by ID")
		console.debug(weatherstation_ID)
	}

	return result
}
