import * as database from '../database/index.js'

export async function get_one_by_ID (ID) {
	var result = get_empty()

	const get_weatherstation = await database.query('Select * from weathertop.weatherstations weatherstation where weatherstation."ID" = $1::uuid', [ ID ])

	if (get_weatherstation.rowCount > 0) {
		const row = get_weatherstation.rows[0]

		result = get_new(
			row.ID,
			row.name,
			row.latitude,
			row.longitude
		)
	}

	return result
}

export async function get_many () {
	var result = []

	const get_weatherstations = await database.query('Select * from weathertop.weatherstations')

	for (var index_of_weatherstation = 0; index_of_weatherstation < get_weatherstations.rowCount; index_of_weatherstation += 1) {
		const row = get_weatherstations.rows[index_of_weatherstation]

		result.push(get_new(row.ID, row.name, row.latitude, row.longitude))
	}

	return result;
}

function get_empty () {
	return get_new(
		undefined,
		undefined,
		undefined,
		undefined
	)
}

function get_new (ID, name, latitude, longitude) {
	var new_url = undefined

	if (ID != undefined) {
		new_url = "/weatherstation?id=" + ID
	}

	return {
		ID: ID,
		name: name,
		latitude: latitude,
		longitude: longitude,
		url: new_url
	}
}
