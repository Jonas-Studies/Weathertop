import get_new_reading from './get_one_new.js'
import insert_reading from './insert_one.js'

export default async function (weatherstation_ID, weathercode, temperature_in_degrees, windspeed_in_kmh, winddirection_in_degrees , airpressure_in_hpa) {
	var new_reading = get_new_reading(
		undefined,
		weatherstation_ID,
		weathercode,
		temperature_in_degrees,
		'°C',
		windspeed_in_kmh,
		'km/h',
		winddirection_in_degrees,
		'°',
		airpressure_in_hpa,
		'hpa',
		undefined
	)

	await insert_reading(new_reading)
}
