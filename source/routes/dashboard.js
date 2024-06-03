import express from "express"
import * as database from "../database/index.js"
import * as weatherstation from "../models/weatherstation.js"

console.log(weatherstation)

const router = express.Router()

router.get("/", async (request, response, next) => {
        const weatherstations = await weatherstation.get_many()

	const weatherstations_with_latestReading = []

        for (var index_of_weatherstation = 0; index_of_weatherstation < weatherstations.length; index_of_weatherstation += 1) {
            var current_weatherstation = weatherstations[index_of_weatherstation]

            const get_latestReading_by_weatherstationID = await database.query('Select * from weathertop.readings reading where reading."weatherstation_ID" = $1::uuid order by reading."created_on" desc fetch first row only', [current_weatherstation.ID])

            if (get_latestReading_by_weatherstationID.rowCount == 1) {
                weatherstations_with_latestReading.push(
                    {
                        weatherstation: {
                            data: current_weatherstation,
                            latest_reading: get_latestReading_by_weatherstationID.rows[0]
                        }
                    }
                )
            }
        }
        
        response.render("dashboard", { weatherstations: weatherstations_with_latestReading })
    }
)

export default router
