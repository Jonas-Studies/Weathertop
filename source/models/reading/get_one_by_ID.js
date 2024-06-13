import * as database from '../../database/database.js'

import get_new_reading from './get_one_new.js'

export default async function (ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select * from weathertop.readings where "ID" = $1::integer',
			[ ID ]
		)

		if (query.rowCount === 1) {
			const row = query.rows[0]

			result = get_new_reading(
				row.ID,
				row.weatherstation_ID, 
				row.weathercode, 
				row.temperature_in_degrees, 
				'°C', 
				row.windspeed_in_kmh, 
				'km/h', 
				row.airpressure_in_hpa, 
				'hpa', 
				row.created_on
			)

			console.info("Loaded weatherstation ID for reading ID")
		}
		else {
			console.error("Could not find weatherstation ID for reading ID")
		}
	}
	catch (error) {
		console.error("Failed to load weatherstation ID for reading ID")
		console.debug(error)
	}

	return result
}
