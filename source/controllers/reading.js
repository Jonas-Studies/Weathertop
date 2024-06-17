import insert_new_reading from '../models/reading/insert_one_new.js'
import insert_reading from '../models/reading/insert_one.js'
import delete_reading_by_ID from '../models/reading/delete_one_by_ID.js'
import get_reading_by_ID from '../models/reading/get_one_by_ID.js'
import get_user_owns_weatherstation_by_weatherstation_ID from '../models/user_owns_weatherstations/get_one_by_weatherstation_ID.js'
import get_weatherstation_by_ID from '../models/weatherstation/get_one_by_ID.js'
import get_current_reading_by_coordinates from '../models/reading/get_current_one_by_coordinates.js'

import is_ID_valid from '../models/is_ID_valid.js'
import is_weathercode_valid from '../models/weathercode/is_key_valid.js'
import is_temperature_valid from '../models/reading/is_temperature_valid.js'
import is_windspeed_valid from '../models/reading/is_windspeed_valid.js'
import is_winddirection_valid from '../models/reading/is_winddirection_valid.js'
import is_airpressure_valid from '../models/reading/is_airpressure_valid.js'

export async function insert_one_new (request, response, next) {
	var result = 400

	console.info('Recieved request to insert one new reading')

	if (request.session.key != undefined) {
		const weatherstationID = Number(request.body.weatherstationID)
		const weathercode = request.body.weathercode
		const temperature = request.body.temperature
		const windspeed = request.body.windspeed
		const winddirection = request.body.winddirection
		const airpressure = request.body.airpressure

		if (
			is_ID_valid(weatherstationID) === true &&
			is_weathercode_valid(weathercode) === true &&
			is_temperature_valid(temperature) === true &&
			is_windspeed_valid(windspeed) === true &&
			is_winddirection_valid(winddirection) === true &&
			is_airpressure_valid(airpressure) === true
		) {
			if (await get_user_owns_weatherstation_by_weatherstation_ID(weatherstationID, request.session.key) != undefined) {
				await insert_new_reading(
					weatherstationID,
					weathercode,
					temperature,
					windspeed,
					winddirection,
					airpressure
				)

				result = 200
			}
			else {
				console.error('User does not own a weatherstation with given ID')
			}
		}
		else {
			console.error('Invalid parameters for request')
			console.debug(request.body)
		}
	}
	else {
		console.error('Access is not authorized')
		result = 401
	}

	response.sendStatus(result)
}

export async function insert_one_from_openweathermap (request, response, next) {
	var result = 400

	console.info('Recieved request to create automatic reading')

	if (request.session.key != undefined) {
		const weatherstationID = Number(request.body.weatherstationID)

		if (is_ID_valid(weatherstationID) === true) {
			if (await get_user_owns_weatherstation_by_weatherstation_ID(request.body.weatherstationID, request.session.key) != undefined) {
				const weatherstation = await get_weatherstation_by_ID(request.body.weatherstationID)
				var reading = await get_current_reading_by_coordinates(weatherstation.latitude, weatherstation.longitude)

				if (reading != undefined) {
					reading.weatherstation_ID = weatherstation.ID

					await insert_reading(reading)

					result = 200

				}

				console.info('Created reading for weatherstation with data from openweathermap')
				console.debug(reading)
			}
			else {
				console.error('No weatherstation for ID that user can access')
			}
		}
		else {
			console.error('Invalid parameters for request')
			console.debug(request.body)
		}
	}
	else {
		console.error('Access is not autorized')

		result = 401
	}

	response.sendStatus(result)
}

export async function delete_one_by_ID (request, response, next) {
	var result = 400

	if (request.session.key != undefined) {
		const reading_ID = Number(request.body.reading_ID)

		if (is_ID_valid(reading_ID) === true) {
			if (await is_reading_owned_by_user(reading_ID, request.session.key) === true) {
				await delete_reading_by_ID(reading_ID)

				result = 200
			}
		}
		else {
			console.error('Invalid parameters for request')
			console.debug(request.body)
		}
	}
	else {
		console.error('Access is not authorized')
		result = 401
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
