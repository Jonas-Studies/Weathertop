import * as weatherstation from './weatherstation.js'
import * as reading from './reading.js'

export async function get_one_by_ID (weatherstationID) {
	var result = get_empty()

	const weatherstation_data = await weatherstation.get_one_by_ID(weatherstationID)
	
	if (weatherstation_data.ID != undefined) {
		const latest_reading = await reading.get_latest_by_weatherstationID(weatherstationID)

		if (latest_reading.ID != undefined) {
			result = get_new(weatherstation, latest_reading)
		}
		else {
			console.info("No reading found for weatherstation " + weatherstation_data.toString())
		}
	}
	else {
		console.info("No weatherstation found for ID " + weatherstationID)
	}

	return result
}

export async function get_many () {
	var result = []

	const get_weatherstations = await weatherstation.get_many()

	if (get_weatherstations.length > 0) {
		for (var index_of_weatherstation = 0; index_of_weatherstation < get_weatherstations.length; index_of_weatherstation += 1) {
			const current_weatherstations_ID = get_weatherstations[index_of_weatherstation].ID

			const latest_reading = await reading.get_latest_by_weatherstationID(current_weatherstations_ID)

			if (latest_reading.ID != undefined) {
				result.push(get_new(get_weatherstations[index_of_weatherstation], latest_reading))
			}
			else {
				console.info("No reading found for weatherstation, weatherstationID: " + current_weatherstations_ID)
			}
		}
	}
	else {
		console.info("No weatherstations found")
	}

	return result
}

function get_empty () {
	return (weatherstation.get_empty(), reading.get_empty())
}

function get_new (weatherstation, latest_reading) {
	return {
		data: weatherstation,
		latest_reading: latest_reading
	}
}
