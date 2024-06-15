import get_weatherstation_by_ID from './get_one_by_ID.js'
import get_details_by_weatherstation_ID from './get_details_by_ID.js'

export default async function (weatherstation_ID) {
	var result = undefined

	const weatherstation = await get_weatherstation_by_ID(weatherstation_ID)

	if (weatherstation != undefined) {
		const details = await get_details_by_weatherstation_ID(weatherstation_ID)

		result = {
			data: weatherstation,
			details: details
		}

		console.info('Loaded weatherstation with details for ID')
		console.debug(weatherstation_ID)
	}
	else {
		console.error('Failed to load weatherstation with details for ID')
		console.debug(weatherstation_ID)
	}

	return result
}
