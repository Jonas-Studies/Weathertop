import get_weatherstations_by_user_ID from './get_many_by_user_ID.js'
import get_details_by_weatherstation_ID from './get_details_by_ID.js'

export default async function (user_ID) {
	var result = undefined

	const weatherstations = await get_weatherstations_by_user_ID(user_ID)

	if (weatherstations != undefined) {
		result = []

		for (var index_of_weatherstation = 0; index_of_weatherstation < weatherstations.length; index_of_weatherstation += 1) {
			const details = await get_details_by_weatherstation_ID(weatherstations[index_of_weatherstation].ID)

			result.push(
				{
					data: weatherstations[index_of_weatherstation],
					details: details
				}
			)

			console.info("Loaded " + index_of_weatherstation + " weatherstations with details for users ID")
			console.debug(result)
		}
	}
	else {
		console.error('Failed to load weatherstations with details for users ID')
		console.debug(user_ID)
	}

	return result
}
