import * as database from '../../database/database.js'

export default async function (weatherstation) {
	try {
		await database.query(
			'Insert into weathertop.weatherstations ("name", "latitude", "longitude") values ($1::varChar, $2::float4, $3::float4)',
			[ weatherstation.name, weatherstation.latitude, weatherstation.longitude ]
		)

		console.info("Inserted weatherstation")
	}
	catch (error) {
		console.error("Failed to insert weatherstation")
		console.debug(error)
	}
}
