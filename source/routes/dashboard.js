import express from "express"
import * as database from "../database/index.js"
import * as weatherstation from "../models/weatherstation.js"
import * as reading from "../models/reading.js"

console.log(reading)

const router = express.Router()

router.get("/", async (request, response, next) => {
        const weatherstations = await weatherstation.get_many()

	const weatherstations_with_latestReading = []

        for (var index_of_weatherstation = 0; index_of_weatherstation < weatherstations.length; index_of_weatherstation += 1) {
            var current_weatherstation = weatherstations[index_of_weatherstation]

	    const latestReading = await reading.get_latest_by_weatherstationID(current_weatherstation.ID)

            console.log(latestReading)

            weatherstations_with_latestReading.push(
                {
                    weatherstation: {
                        data: current_weatherstation,
                        latest_reading: latestReading
                    }
                }
            )
        }
        
        response.render("dashboard", { weatherstations: weatherstations_with_latestReading })
    }
)

export default router
