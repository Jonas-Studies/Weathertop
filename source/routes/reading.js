import insert_new_reading from '../models/reading/insert_one_new.js'
import express from "express"

const router = express.Router()

router.post("/insert_one", async (request, response, next) => {
	console.debug(request.body)

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

export default router
