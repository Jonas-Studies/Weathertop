import get_new_weatherstation from './get_one_new.js'

import * as database from '../../database/database.js'

export default async function get_weatherstation_by_ID (ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select * from weathertop.weatherstations weatherstation where weatherstation."ID" = $1::integer',
			[ ID ]
		)

		if (query.rowCount === 1) {
			const weatherstation = query.rows[0]

			result = get_new_weatherstation(
				weatherstation.ID,
				weatherstation.name,
				weatherstation.latitude,
				weatherstation.longitude
			)

			console.info("Loaded weatherstation by ID")
			console.debug(result)
		}
		else {
			console.error("Could not find weatherstation for ID")
		}

	}
	catch (error) {
		console.error("Could not load weatherstation by ID")
		console.debug(error)
	}

	return result
}
