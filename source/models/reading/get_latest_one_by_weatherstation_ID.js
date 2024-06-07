import * as database from '../../database/database.js'

import get_new_reading from './get_one_new.js'

export default async function (weatherstation_ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select * from weathertop.readings reading where reading."weatherstation_ID" = $1::uuid order by reading."created_on" desc fetch first row only',
			[weatherstation_ID]
		)

		if (query.rowCount === 1) {
			const reading = query.rows[0]

			result = get_new_reading(
				reading.ID,
				reading.weatherstation_ID,
				reading.weathercode,
				reading.temperature,
				'°C',
				reading.windspeed_in_kmh,
				'km/h',
				reading.airpressure_in_hpa,
				'hpa',
				reading.created_on
			)
			
			console.info("Loaded latest reading for weatherstation")
			console.debug(result)
		}
		else {
			console.error('Could not find a reading for weatherstation')
		}
	}
	catch (error) {
		console.error("Could not load latest reading for weatherstation")
		console.debug(error)
	}

	return result
}
