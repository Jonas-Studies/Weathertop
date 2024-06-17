export default function (latitude) {
	let result = true

	if (latitude === undefined) {
		result = false

		console.error('Latitude is not defined')
	}

	if (Number.isFinite(latitude) === false) {
		result = false

		console.error('Latitude is no finite number')
	}

	if (latitude <= -90 || latitude >= 90) {
		result = false

		console.error('Latitude is not in range')
	}

	return result
}
