import * as database from '../../database/database.js'

import get_reading_by_ID from './get_one_by_ID.js'

export default async function (weatherstation_ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select "ID" from weathertop.readings reading where reading."weatherstation_ID" = $1::integer order by reading."created_on" desc fetch first row only',
			[weatherstation_ID]
		)

		if (query.rowCount === 1) {
			const row = query.rows[0]

			result = await get_reading_by_ID(row.ID)
			
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
