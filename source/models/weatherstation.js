import * as database from '../database/index.js'

export const get_one_by_ID = async (ID) => {
	var result = get_empty()

	const get_weatherstation = await database.query('Select * from weathertop.weatherstations weatherstation where weatherstation."ID" = $1::uuid', [ ID ])

	if (get_weatherstation.rowCount == 1) {
		result = get_weatherstation.rows[0]
	}

	return result
}

export async function get_many () {
	var result = []

	const get_weatherstations = await database.query('Select * from weathertop.weatherstations')

	if (get_weatherstations.rowCount > 0) {
		result = get_weatherstations.rows
	}

	return result;
}

function get_empty () {
	return {
		ID: undefined,
		name: undefined,
		latitude: undefined,
		longitude: undefined
	}
}
