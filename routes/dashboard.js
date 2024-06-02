import express from "express"
import * as database from "../database/index.js"

const router = express.Router()

router.get("/", async (request, response, next) => {
        const get_weatherstations = await database.query("Select * from weathertop.weatherstations")

        var weatherstations = []

        for (var index_of_weatherstation = 0; index_of_weatherstation < get_weatherstations.rows.length; index_of_weatherstation += 1) {
            var weatherstation = get_weatherstations.rows[index_of_weatherstation]

            const get_latestReading_by_weatherstationID = await database.query('Select * from weathertop.readings reading where reading."weatherstation_ID" = $1::uuid order by reading."created_on" desc fetch first row only', [weatherstation.ID])

            if (get_latestReading_by_weatherstationID.rowCount == 1) {
                weatherstations.push(
                    {
                        weatherstation: {
                            data: weatherstation,
                            latest_reading: get_latestReading_by_weatherstationID.rows[0]
                        }
                    }
                )
            }
        }

        console.log(weatherstations)
        
        console.log(weatherstations[0].weatherstation)

        response.render("dashboard", { weatherstations: weatherstations })
    }
)

export default router