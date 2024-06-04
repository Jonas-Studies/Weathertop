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
		
		console.log("Loaded the weatherstation with the ID " + ID)
		console.log(result)
	}
	else {
		console.info("No weatherstation found for ID: " + ID)
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

	console.debug(result)

	return result;
}

export async function insert_one_new (name, latitude, longitude) {
	const new_weatherstation = get_new(undefined, name, latitude, longitude)

	insert_one(new_weatherstation)
}

export async function insert_one ( weatherstation ) {
	var result = undefined

	const query = await database.query('Insert into weathertop.weatherstations ( "ID", "name", "latitude", "longitude" ) values ( gen_random_uuid(), $1::varChar, $2::float4, $3::float4)', [ weatherstation.name, weatherstation.latitude, weatherstation.longitude ] )

	console.debug(query)
}

export function get_empty () {
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
