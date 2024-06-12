import get_weatherstations from '../models/weatherstation_with_latest_reading/get_many.js'
import get_weatherstation_by_ID from '../models/weatherstation_with_latest_reading/get_one_by_weatherstation_ID.js'
import get_readings_by_weatherstation_ID from '../models/reading/get_many_by_weatherstation_ID.js'
import insert_new_weatherstation from '../models/weatherstation/insert_one_new.js'
import delete_weatherstation_by_ID from '../models/weatherstation/delete_one_by_ID.js'

export async function display_many (request, response, next) {
	if (request.session.key == undefined) {
		response.redirect('/login')
	}
	else {
		const weatherstations = await get_weatherstations()

		response.render('dashboard', { weatherstations: weatherstations } )
	}
}

export async function display_one_by_ID (request, response, next) {
	if (request.session.key != undefined) {
		const weatherstation_id = request.query.id

		const weatherstation = {
			weatherstation: await get_weatherstation_by_ID(weatherstation_id),
			readings: await get_readings_by_weatherstation_ID(weatherstation_id)
		}

		console.debug(weatherstation)

		response.render("weatherstation", weatherstation)
	}
	else {
		response.redirect('/')
	}
}

export async function insert_one_new (request, response, next) {
	if (request.session.key != undefined) {
		await insert_new_weatherstation(request.body.name, request.body.latitude, request.body.longitude)
		
		response.sendStatus(200)
	}
	else {
		response.sendStatus(401)
	}
}

export async function delete_one_by_ID (request, response, next) {
	if (request.session.key != undefined) {
		const weatherstation_ID = request.query.id

		await delete_weatherstation_by_ID(weatherstation_ID)

		response.redirect("/dashboard")
	}
	else {
		response.redirect('/')
	}
}
