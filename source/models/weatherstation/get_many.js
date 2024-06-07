import * as database from '../../database/database.js'

import get_weatherstation_by_ID from './get_one_by_ID.js'

export default async function () {
	var result = []

	try {
		const query = await database.query(
			'Select "ID" from weathertop.weatherstations'
		)

		if (query.rowCount > 0) {
			var index_of_row = 0

			for (; index_of_row < query.rowCount; index_of_row += 1) {
				const row = query.rows[index_of_row]

				result.push(
					await get_weatherstation_by_ID(row.ID)
				)	
			}

			console.info("Loaded " + index_of_row + " weatherstations")
			console.debug(result)
		}
		else {
			console.error("Could not find weatherstations")
		}
	}
	catch (error) {
		console.error('Failed to get weatherstations')
		console.debug(error)
	}

	return result
}
