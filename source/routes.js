import express from "express"

const router = express.Router()

router.get("/register", (request, response, next) => {
        response.render("register")
    }
)

export default router
