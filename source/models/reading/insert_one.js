import * as database from '../../database/database.js'

export default async function (reading) {
	try {
		const query = await database.query(
			'Insert into weathertop.readings ("weatherstation_ID", "weathercode", "temperature_in_degrees", "windspeed_in_kmh", "winddirection_in_degrees", "airpressure_in_hpa") values ($1::integer, $2::integer, $3::float4, $4::float4, $5::float4, $6::float4)',
			[ reading.weatherstation_ID, reading.weathercode.key, reading.temperature.value, reading.windspeed.value, reading.winddirection.value, reading.airpressure.value ]
		)
		
		console.info("Inserted reading")
	}
	catch (error) {
		console.error("Could not insert reading")
		console.debug(error)
	}
}
