import * as database from '../../database/database.js'

import insert_weatherstation_for_user_by_IDs from '../user_owns_weatherstations/insert_one_new.js'

import get_weatherstation_by_ID from './get_one_by_ID.js'

export default async function (weatherstation, user_ID) {
	var result = undefined

	const inserted_weatherstation = await insert_weatherstation (weatherstation)

	if (inserted_weatherstation.ID != undefined) {
		insert_weatherstation_for_user_by_IDs(user_ID, inserted_weatherstation.ID)

		result = inserted_weatherstation
	}

	return result
}

async function insert_weatherstation (weatherstation) {
	let result = undefined

	try {
		const query = await database.query(
			'Insert into weathertop.weatherstations ("name", "latitude", "longitude") values ($1::varChar, $2::float4, $3::float4) returning "ID"',
			[ weatherstation.name, weatherstation.latitude, weatherstation.longitude ]
		)

		console.info("Inserted weatherstation")
		console.debug(query.rows)

		if (query.rows[0].ID != undefined) {
			result = get_weatherstation_by_ID(query.rows[0].ID)
		}
		else {
			console.error("Failed to load inserted weatherstation")
		}
	}
	catch (error) {
		console.error("Failed to insert weatherstation")
		console.debug(error)
	}

	return result
}
