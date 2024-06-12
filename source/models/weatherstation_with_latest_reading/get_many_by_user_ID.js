import get_weatherstations_by_user_ID from '../weatherstation/get_many_by_user_ID.js'
import get_reading_by_weatherstation_ID from '../reading/get_latest_one_by_weatherstation_ID.js'
import get_new_weatherstation_with_latest_reading from './get_one_new.js'

export default async function (user_ID) {
	var result = []

	const weatherstations = await get_weatherstations_by_user_ID(user_ID)

	var index_of_weatherstation = 0

	for (; index_of_weatherstation < weatherstations.length; index_of_weatherstation += 1) {
		const weatherstation = weatherstations[index_of_weatherstation]
		const latest_reading = await get_reading_by_weatherstation_ID(weatherstation.ID)

		result.push(get_new_weatherstation_with_latest_reading(weatherstation, latest_reading))
	}

	console.info('Loaded ' + index_of_weatherstation.toString() + ' weatherstations with their latest reading')
	console.debug(result)

	return result
}
