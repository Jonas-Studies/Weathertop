import insert_new_reading from '../models/reading/insert_one_new.js'
import delete_reading_by_ID from '../models/reading/delete_one_by_ID.js'
import get_weatherstation_ID_by_reading_ID from '../models/reading/get_weatherstation_ID_by_ID.js'
import express from "express"

const router = express.Router()

router.post("/insert_one", async (request, response, next) => {
	insert_new_reading(
		request.body.weatherstationID,
		request.body.weathercode,
		request.body.temperature,
		request.body.windspeed,
		request.body.airpressure
	)

	response.send(200)
    }
)

router.get("/delete_one_by_id", async (request, response, next) => {
		const reading_ID = request.query.id
		const weatherstation_ID = await get_weatherstation_ID_by_reading_ID(reading_ID)

		delete_reading_by_ID(reading_ID)

		response.redirect('/weatherstation?id=' + weatherstation_ID)
		
	}
)

export default router
