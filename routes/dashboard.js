import express from "express"
import * as database from "../database/index.js"

const router = express.Router()

router.get("/", async (request, response, next) => {
        const get_weatherstations = await database.query("Select * from weathertop.weatherstations")

        response.render("dashboard", { weatherstations: get_weatherstations.rows })
    }
)

export default router