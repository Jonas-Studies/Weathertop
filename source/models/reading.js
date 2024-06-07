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

export async function get_many_by_weatherstation_ID (weatherstation_ID) {
	var result = []

	const readings = await database.query('Select * from weathertop.readings reading where reading."weatherstation_ID" = $1::uuid', [weatherstation_ID])
	
	if (readings.rowCount > 0) {
		for (var index_of_row = 0; index_of_row < readings.rowCount; index_of_row += 1) {
			const current_row = readings.rows[index_of_row]

			result.push(get_new(
				current_row.ID,
				current_row.weatherstation_ID,
				current_row.weathercode,
				current_row.temperature,
				'°C',
				current_row.windspeed_in_kmh,
				'km/h',
				current_row.airpressure_in_hpa,
				'hpa'
			))
		}
	}
	else {
		console.info("No readings found for weatherstation-ID: " + weatherstation_ID)
	}

	console.debug(result)

	return result
}

export function insert_one_new (weatherstationID, weathercode, temperature, windspeed, airpressure) {
	var new_reading = get_new(undefined, weatherstationID, weathercode, temperature, '°C', windspeed, 'km/h', airpressure, 'hpa')

	insert_one(new_reading)
}

function insert_one (reading) {
	const query = database.query('Insert into weathertop.readings ("ID", "weatherstation_ID", "weathercode", "temperature", "windspeed_in_kmh", "airpressure_in_hpa") values (gen_random_uuid(), $1::uuid, $2::integer, $3::float4, $4::float4, $5::float4)', [ reading.weatherstation_ID, reading.weathercode, reading.temperature, reading.windspeed, reading.airpressure ])
}

export function delete_one_by_ID (ID) {
	const query = database.query('Delete from weathertop.readings reading where reading."ID" = $1::uuid', [ ID ])
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
