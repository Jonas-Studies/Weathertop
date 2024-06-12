import insert_new_reading from '../models/reading/insert_one_new.js'
import delete_reading_by_ID from '../models/reading/delete_one_by_ID.js'
import get_weatherstation_ID_by_reading_ID from '../models/reading/get_weatherstation_ID_by_ID.js'

export async function insert_one_new (request, response, next) {
	if (request.session.key != undefined) {
		await insert_new_reading(
			request.body.weatherstationID,
			request.body.weathercode,
			request.body.temperature,
			request.body.windspeed,
			request.body.airpressure
		)

		response.sendStatus(200)
	}
	else {
		response.sendStatus(401)
	}
}

export async function delete_one_by_ID (request, response, next) {
	var result = 400

	if (request.session.key != undefined) {
		const reading_ID = request.body.reading_ID

		if (reading_ID != undefined) {
			await delete_reading_by_ID(reading_ID)

			result = 200
		}
	}

	response.sendStatus(result)
}
