import express from "express"

const router = express.Router()

router.get("/", (request, response, next) => {
        response.render("station")
    }
)

export default router