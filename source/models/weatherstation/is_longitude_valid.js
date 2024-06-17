export default function (longitude) {
	let result = true

	if (longitude === undefined) {
		result = false

		console.error('Longitude is not defined')
	}

	if (Number.isFinite(longitude) === false) {
		result = false

		console.error('Longitude is no string')
	}

	if (longitude <= -180 || longitude >= 180) {
		result = false

		console.error('Longitude is not in range')
	}

	return result
}
