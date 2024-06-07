import * as database from '../../database/database.js'

export default async function (ID) {
	var result = undefined

	try {
		const query = await database.query(
			'Select "weatherstation_ID" from weathertop.readings where "ID" = $1::uuid',
			[ ID ]
		)

		if (query.rowCount === 1) {
			const row = query.rows[0]

			result = row.weatherstation_ID

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
