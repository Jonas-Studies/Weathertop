import express from "express"
import get_weatherstations from '../models/weatherstation_with_latest_reading/get_many.js'

const router = express.Router()

router.get("/", async (request, response, next) => {
        const weatherstations = await get_weatherstations()
        
        response.render("dashboard", { weatherstations: weatherstations })
    }
)

export default router
