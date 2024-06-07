import express from "express"

import get_weatherstation_by_ID from '../models/weatherstation_with_latest_reading/get_one_by_weatherstation_ID.js'
import get_readings_by_weatherstation_ID from '../models/reading/get_many_by_weatherstation_ID.js'
import insert_new_weatherstation from '../models/weatherstation/insert_one_new.js'
import delete_weatherstation_by_ID from '../models/weatherstation/delete_one_by_ID.js'

const router = express.Router()

router.get("/", async (request, response, next) => {
	const weatherstation_id = request.query.id

	const weatherstation = {
		weatherstation: await get_weatherstation_by_ID(weatherstation_id),
		readings: await get_readings_by_weatherstation_ID(weatherstation_id)
	}

	console.debug(weatherstation)

        response.render("weatherstation", weatherstation)
    }
)

router.post("/insert_one", async (request, response, next) => {
	console.debug(request.body)

	await insert_new_weatherstation(request.body.name, request.body.latitude, request.body.longitude)
	
	response.sendStatus(200)
})

router.get("/delete_one_by_id", async (request, response, next) => {
	const weatherstation_ID = request.query.id

	await delete_weatherstation_by_ID(weatherstation_ID)

	response.redirect("/dashboard")
})

export default router
