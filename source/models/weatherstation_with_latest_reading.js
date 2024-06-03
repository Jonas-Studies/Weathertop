import * as weatherstation from './weatherstation.js'
import * as reading from 'reading.js'

export async function get_one_by_ID (weatherstationID) {
	const result = get_empty()

	const weatherstation = weatherstation_get_one_by_ID(weatherstationID)
	
	if (weatherstation.ID != undefined) {
		const latest_reading = reading.get_latest_by_weatherstationID(weatherstationID)

		if (latest_reading.ID != undefined) {
			result = get_new(weatherstation, latest_reading)
		}
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
