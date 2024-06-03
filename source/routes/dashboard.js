import express from "express"
import * as weatherstation_with_latest_reading from '../models/weatherstation_with_latest_reading.js'

const router = express.Router()

router.get("/", async (request, response, next) => {
        const weatherstations = await weatherstation_with_latest_reading.get_many()

	console.debug(weatherstations)
        
        response.render("dashboard", { weatherstations: weatherstations })
    }
)

export default router
