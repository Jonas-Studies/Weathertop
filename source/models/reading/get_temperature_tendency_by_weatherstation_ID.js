import * as database from '../../database/database.js'

export default async function (weatherstation_ID) {
	let result = undefined

	try {
		const query = await database.query(
			'With history as (Select "temperature_in_degrees" from weathertop.readings where "weatherstation_ID" = $1::integer order by created_on desc offset 1 rows fetch first 3 rows only) Select (readings."temperature_in_degrees" - (Select avg("temperature_in_degrees") from history)) as "avg" from weathertop.readings where "weatherstation_ID" = $1::integer order by created_on desc fetch first row only',
			[ weatherstation_ID ]
		)

		if (query.rowCount === 1 && query.rows[0].avg != null) {
			result = query.rows[0].avg

			console.info('Loaded temperatures tendency')
			console.debug(result)
		}
		else {
			console.info('Could not calculate temperatures tendency')
		}
	}
	catch (error) {
		console.error('Failed to get the temperatures tendency')
		console.debug(error)
	}

	return result
}
