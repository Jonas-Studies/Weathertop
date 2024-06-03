import express from "express"

import * as ws from "../models/weatherstation.js"
import * as reading from "../models/reading.js"

const router = express.Router()

router.get("/", async (request, response, next) => {
	const weatherstation_id = request.query.id

	const weatherstation = {
		weatherstation: {
			data: await ws.get_one_by_ID(weatherstation_id),
			latest_reading: await reading.get_latest_by_weatherstationID(weatherstation_id)
		}
	}

	console.log(weatherstation)

        response.render("station", weatherstation)
    }
)

export default router
