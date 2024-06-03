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

function get_empty () {
	return (weatherstation.get_empty(), reading.get_empty())
}

function get_new (weatherstation, latest_reading) {
	return {
		data: weatherstation,
		latest_reading: latest_reading
	}
}
