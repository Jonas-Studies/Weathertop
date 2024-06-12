import * as database from '../../database/database.js'

import get_new_reading from './get_one_new.js'

export default async function (weatherstation_ID) {
	var result = []

	try {
		const query = await database.query(
			'Select * from weathertop.readings reading where reading."weatherstation_ID" = $1::integer',
			[ weatherstation_ID ]
		)

		if (query.rowCount > 0) {
			var index_of_row = 0;

			for (; index_of_row < query.rowCount; index_of_row += 1) {
				const row = query.rows[index_of_row]

				result.push(
					get_new_reading(
						row.ID,
						row.weatherstation_ID,
						row.weathercode,
						row.temperature,
						'°C',
						row.windspeed_in_kmh,
						'kmh',
						row.airpressure_in_hpa,
						'hpa',
						row.created_on
					)
				)
			}

			console.info("Loaded " + index_of_row.toString() + " readings for weatherstation ID")
			console.debug(result)
		}
		else {
			console.error("Could not find readings for weatherstation ID")
		}
	}
	catch (error) {
		console.error("Could not load readings for weatherstation ID")
		console.debug(error)
	}

	return result
}
