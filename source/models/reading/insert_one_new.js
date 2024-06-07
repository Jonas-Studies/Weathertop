import get_new_reading from './get_one_new.js'
import insert_reading from './insert_one.js'

export default async function (weatherstation_ID, weathercode, temperature_in_degrees, windspeed_in_kmh, airpressure_in_hpa) {
	var new_reading = get_new_reading(
		undefined,
		weatherstation_ID,
		weathercode,
		temperature_in_degrees,
		'°C',
		windspeed_in_kmh,
		'km/h',
		airpressure_in_hpa,
		'hpa',
		undefined
	)

	insert_reading(new_reading)
}
