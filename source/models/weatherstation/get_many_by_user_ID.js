import * as database from '../../database/database.js'

import get_weatherstation_by_ID from './get_one_by_ID.js'

export default async function (user_ID) {
	var result = []

	try {
		const query = await database.query(
			'Select "weatherstation_ID" from weathertop.user_owns_weatherstations where "user_ID" = $1::integer',
			[ user_ID ]
		)

		if (query.rowCount > 0) {
			var index_of_row = 0

			for (; index_of_row < query.rowCount; index_of_row += 1) {
				const row = query.rows[index_of_row]

				result.push(
					await get_weatherstation_by_ID(row.weatherstation_ID)
				)	
			}

			console.info("Loaded " + index_of_row + " weatherstations")
			console.debug(result)
		}
		else {
			console.error("Could not find weatherstations for user")
		}
	}
	catch (error) {
		console.error('Failed to get weatherstations for user')
		console.debug(error)
	}

	return result
}
