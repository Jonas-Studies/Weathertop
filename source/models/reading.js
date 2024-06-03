import * as database from '../database/index.js'

export async function get_latest_by_weatherstationID (weatherstation_ID) {
	var result = get_empty()

	const get_reading = await database.query('Select * from weathertop.readings reading where reading."weatherstation_ID" = $1::uuid', [ weatherstation_ID ])

	if (get_reading.rowCount > 0) {
		const row = get_reading.rows[0]

		result = get_new(
			row.ID,
			row.weatherstation_ID,
			row.weathercode,
			row.temperature,
			'°C',
			row.windspeed_in_kmh,
			'km/h',
			row.airpressure_in_hpa,
			'hpa'
		)
	}

	return result
}

export function get_empty () {
	return get_new(
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined
	)
}

function get_new (ID, weatherstation_ID, weathercode, temperature, unit_of_temperature, windspeed, unit_of_windspeed, airpressure, unit_of_airpressure) {
	return {
		ID: ID,
		weatherstation_ID: weatherstation_ID,
		weathercode: weathercode,
		temperature: temperature,
		unit_of_temperature: unit_of_temperature,
		windspeed: windspeed,
		unit_of_windspeed: unit_of_windspeed,
		airpressure: airpressure,
		unit_of_airpressure: unit_of_airpressure
	}
}
