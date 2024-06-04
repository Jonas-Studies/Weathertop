import express from "express"

import * as weatherstation_with_latest_reading from "../models/weatherstation_with_latest_reading.js"
import * as weatherstation_model from "../models/weatherstation.js"
import * as readings from "../models/reading.js"

const router = express.Router()

router.get("/", async (request, response, next) => {
	const weatherstation_id = request.query.id

	const weatherstation = {
		weatherstation: await weatherstation_with_latest_reading.get_one_by_ID(weatherstation_id),
		readings: await readings.get_many_by_weatherstation_ID(weatherstation_id)
	}

	console.debug(weatherstation)

        response.render("weatherstation", weatherstation)
    }
)

router.post("/insert_one", async (request, response, next) => {
	weatherstation_model.insert_one_new(request.body.input_name, request.body.input_latitude, request.body.input_longitude)
	
	response.redirect("/dashboard")
})

router.get("/delete_one_by_id", async (request, response, next) => {
	const weatherstation_ID = request.query.id

	weatherstation_model.delete_one_by_ID(weatherstation_ID)

	response.redirect("/dashboard")
})

export default router
