import express from "express"

const router = express.Router()

router.post("/insert_one", async (request, response, next) => {
	console.debug(request.body)

	response.send(200)
    }
)

export default router
