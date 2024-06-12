import * as authentification from './controllers/authentification.js'
import * as reading from './controllers/reading.js'
import * as weatherstation from './controllers/weatherstation.js'
import * as user from './controllers/user.js'

import express from 'express'

const router = express.Router()

router.get('/register', authentification.display_registration_page) 
router.get('/login', authentification.display_login_page)
router.post('/login', authentification.create_session)
router.get('/logout', authentification.destroy_session)

router.get('/dashboard', weatherstation.display_many)
router.get('/weatherstation', weatherstation.display_one_by_ID)
router.post('/weatherstation/insert_one_new', weatherstation.insert_one_new)
router.get('/weatherstation/delete_one_by_id', weatherstation.delete_one_by_ID)

router.post('/reading/insert_new_reading', reading.insert_one_new)
router.post('/reading/delete_one_by_id', reading.delete_one_by_ID)

router.post('/user/insert_one_new', user.insert_one_new)
router.get('/user/is_username_existing', user.is_name_existing)

export default router
