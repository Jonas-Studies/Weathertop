import * as reading_controller from './controllers/reading.js'

import express from 'express'

const router = express.Router()

router.get('/register', (request, response, next) => {
        response.render('register')
    }
)

router.post('/reading/insert_new_reading', reading_controller.insert_one_new)

router.post('/reading/delete_one_by_ID', reading_controller.delete_one_by_ID)

export default router
