export default function (temperature) {
	let result = true

	if (temperature != undefined) {
		if (Number.isFinite(temperature) === false) {
			result = false

			console.error('Temperature is not a finite number')
		}
	}

	return result
}
