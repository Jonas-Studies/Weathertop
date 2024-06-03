import express from "express"

import * as weatherstation_with_latest_reading from "../models/weatherstation_with_latest_reading.js"

const router = express.Router()

router.get("/", async (request, response, next) => {
	const weatherstation_id = request.query.id

	const weatherstation = {
		weatherstation: await weatherstation_with_latest_reading.get_one_by_ID(weatherstation_id)
	}

        response.render("station", weatherstation)
    }
)

export default router
