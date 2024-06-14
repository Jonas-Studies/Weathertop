import insert_new_reading from '../models/reading/insert_one_new.js'
import delete_reading_by_ID from '../models/reading/delete_one_by_ID.js'
import get_reading_by_ID from '../models/reading/get_one_by_ID.js'
import get_user_owns_weatherstation_by_weatherstation_ID from '../models/user_owns_weatherstations/get_one_by_weatherstation_ID.js'

export async function insert_one_new (request, response, next) {
	var result = 401

	if (request.session.key != undefined) {
		if (await get_user_owns_weatherstation_by_weatherstation_ID(request.body.weatherstationID, request.session.key) != undefined) {
			console.debug(request.body)

			await insert_new_reading(
				request.body.weatherstationID,
				request.body.weathercode,
				request.body.temperature,
				request.body.windspeed,
				0,
				request.body.airpressure
			)

			result = 200
		}
		else {
			result = 400
		}
	}

	response.sendStatus(result)
}

export async function delete_one_by_ID (request, response, next) {
	var result = 401

	if (request.session.key != undefined) {
		const reading_ID = request.body.reading_ID

		if (await is_reading_owned_by_user(reading_ID, request.session.key) === true) {
			await delete_reading_by_ID(reading_ID)

			result = 200
		}
	}

	response.sendStatus(result)
}

async function is_reading_owned_by_user (reading_ID, user_ID) {
	var result = false
	
	const reading = await get_reading_by_ID(reading_ID)

	if (reading.weatherstation_ID != undefined) {
		if (await get_user_owns_weatherstation_by_weatherstation_ID(reading.weatherstation_ID, user_ID) != undefined) {
			result = true
		}
	}

	return result
}
