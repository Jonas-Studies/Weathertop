import * as database from '../../database/database.js'

export default async function (ID) {
	try {
		await database.query(
			'Delete from weathertop.weatherstations where "ID" = $1::uuid',
			[ ID ]
		)

		console.info('Deleted weatherstation for ID')
	}
	catch (error) {
		console.error('Failed to delete weatherstation for ID')
		console.debug(error)
	}
}
