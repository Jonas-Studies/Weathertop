import get_weatherstations_with_details_by_user_ID from '../models/weatherstation/get_many_with_details_by_user_ID.js'
import get_weatherstation_with_details_by_ID from '../models/weatherstation/get_one_with_details_by_ID.js'
import get_readings_by_weatherstation_ID from '../models/reading/get_many_by_weatherstation_ID.js'
import insert_new_weatherstation from '../models/weatherstation/insert_one_new.js'
import delete_weatherstation_by_ID from '../models/weatherstation/delete_one_by_ID.js'
import get_user_owns_weatherstation_by_weatherstation_ID from '../models/user_owns_weatherstations/get_one_by_weatherstation_ID.js'
import get_weathercodes from '../models/weathercode/get_many.js'
import is_name_valid from '../models/weatherstation/is_name_valid.js'
import is_latitude_valid from '../models/weatherstation/is_latitude_valid.js'
import is_longitude_valid from '../models/weatherstation/is_longitude_valid.js'

export async function display_many (request, response, next) {
	if (request.session.key == undefined) {
		response.redirect('/login')
	}
	else {
		const weatherstations = await get_weatherstations_with_details_by_user_ID(request.session.key)

		response.render('dashboard', { weatherstations: weatherstations } )
	}
}

export async function display_one_by_ID (request, response, next) {
	if (request.session.key != undefined) {
		const weatherstation_id = request.params.weatherstationID

		if (await get_user_owns_weatherstation_by_weatherstation_ID(weatherstation_id, request.session.key) != undefined) {
			const weatherstation = await get_weatherstation_with_details_by_ID(weatherstation_id)
			const readings = await get_readings_by_weatherstation_ID(weatherstation_id)

			const weathercodes = get_weathercodes()

			console.debug(weathercodes)

			response.render("weatherstation", { weatherstation: weatherstation, readings: readings, weathercodes: weathercodes })
		}
		else {
			response.sendStatus(400)
		}
	}
	else {
		response.redirect('/')
	}
}

export async function insert_one_new (request, response, next) {
	console.info('Recieved request to insert one new weatherstation')

	const name = request.body.name
	const latitude = request.body.latitude
	const longitude = request.body.longitude

	if (request.session.key != undefined) {
		if (is_name_valid(name) === true && is_latitude_valid(latitude) === true && is_longitude_valid(longitude) === true) {
			await insert_new_weatherstation(name, latitude, longitude, request.session.key)

			response.sendStatus(200)
		}
		else {
			console.error('Invalid parameters for request')
			console.debug(request.body)
		}
	}
	else {
		console.debug('User is not authenticated')
		response.sendStatus(401)
	}
}

export async function delete_one_by_ID (request, response, next) {
	var result = 400

	if (request.session.key != undefined) {
		const weatherstation_ID = request.body.weatherstation_ID

		if (await get_user_owns_weatherstation_by_weatherstation_ID(weatherstation_ID, request.session.key) != undefined) {
			if (weatherstation_ID != undefined) {
				await delete_weatherstation_by_ID(weatherstation_ID)

				result = 200
			}
		}
	}

	response.sendStatus(result)
}
