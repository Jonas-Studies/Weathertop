import express from "express"

const router = express.Router()

router.get("/", (request, response, next) => {
        response.render("dashboard")
    }
)

export default router