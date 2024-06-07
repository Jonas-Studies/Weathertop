import get_new_weatherstation from './get_one_new.js'
import insert_weatherstation from './insert_one.js'

export default async function (name, latitude, longitude) {
	const new_weatherstation = get_new_weatherstation(undefined, name, latitude, longitude)

	insert_weatherstation(new_weatherstation)
}
