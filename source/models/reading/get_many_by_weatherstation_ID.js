import * as database from '../../database/database.js'

import get_reading_by_ID from './get_one_by_ID.js' 

export default async function (weatherstation_ID) {
	var result = []

	try {
		const query = await database.query(
			'Select "ID" from weathertop.readings reading where reading."weatherstation_ID" = $1::integer',
			[ weatherstation_ID ]
		)

		if (query.rowCount > 0) {
			var index_of_row = 0;

			for (; index_of_row < query.rowCount; index_of_row += 1) {
				const row = query.rows[index_of_row]

				result.push(await get_reading_by_ID(row.ID))
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
