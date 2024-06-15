import get_weathercode_by_key from '../weathercode/get_one_by_key.js'

export default function (ID, weatherstation_ID, weathercode, temperature, unit_of_temperature, windspeed, unit_of_windspeed, winddirection, unit_of_winddirection, airpressure, unit_of_airpressure, created_on) {
	const result = {
		ID: ID,
		weatherstation_ID: weatherstation_ID,
		weathercode: weathercode,
		temperature: temperature,
		unit_of_temperature: unit_of_temperature,
		windspeed: windspeed,
		unit_of_windspeed: unit_of_windspeed,
		widdirection: winddirection,
		unit_of_winddirection: unit_of_winddirection,
		airpressure: airpressure,
		unit_of_airpressure: unit_of_airpressure,
		created_on: created_on
	}

	console.info("Loaded reading")
	console.debug(result)

	return result
}
