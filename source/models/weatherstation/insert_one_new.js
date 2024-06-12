import get_new_weatherstation from './get_one_new.js'
import insert_weatherstation from './insert_one.js'

export default async function (name, latitude, longitude, user_ID) {
	const new_weatherstation = get_new_weatherstation(undefined, name, latitude, longitude)

	const result = insert_weatherstation(new_weatherstation, user_ID)

	return result
}
