export default function (airpressure) {
	let result = true

	if (airpressure != undefined) {
		if (Number.isFinite(airpressure) === false) {
			result = false

			console.error('Airpressure is not a finite number')
		}

		if (airpressure < 0) {
			result = false

			console.error('Airpressure is a negative number')
		}
	}

	return result
}
