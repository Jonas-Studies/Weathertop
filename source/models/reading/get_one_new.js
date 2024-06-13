import get_weathercode_by_key from '../weathercode/get_one_by_key.js'

export default function (ID, weatherstation_ID, weathercode, temperature, unit_of_temperature, windspeed, unit_of_windspeed, airpressure, unit_of_airpressure, created_on) {
	const result = {
		ID: ID,
		weatherstation_ID: weatherstation_ID,
		weathercode: get_weathercode_by_key(weathercode),
		temperature: {
			value: temperature,
			unit: unit_of_temperature
		},
		windspeed: {
			value: windspeed,
			unit: unit_of_windspeed
		},
		airpressure: {
			value: airpressure,
			unit: unit_of_airpressure
		},
		created_on: created_on
	}

	console.info("Loaded reading")
	console.debug(result)

	return result
}
