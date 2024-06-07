import get_new_weatherstation_with_latest_reading from './get_one_new.js'
import get_weatherstation_by_ID from '../weatherstation/get_one_by_ID.js'
import get_latest_reading_by_weatherstation_ID from '../reading/get_latest_one_by_weatherstation_ID.js'

export default async function (weatherstation_ID) {
	var result = undefined

	const weatherstation = await get_weatherstation_by_ID(weatherstation_ID)

	if (weatherstation != undefined) {
		const latest_reading = await get_latest_reading_by_weatherstation_ID(weatherstation_ID)

		result = get_new_weatherstation_with_latest_reading(
			weatherstation,
			latest_reading
		)

		console.info("Loaded weatherstation with its latest reading")
		console.debug(result)
	}
	else {
		console.error("Could not load weatherstation with latest reading")
	}
	
	return result
}
