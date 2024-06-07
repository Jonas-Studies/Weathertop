import * as database from '../../database/database.js'

export default async function (ID) {
	try {
		const query = database.query(
			'Delete from weathertop.readings where "ID" = $1::uuid',
			[ ID ]
		)

		console.debug(query)

		console.info("Deleted reading for ID")
		console.debug(ID)
	}
	catch (error) {
		console.error("Failed to delete reading for ID")
		console.debug(error)
	}
}
