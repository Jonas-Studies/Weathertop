export default function (windspeed) {
	let result = true

	if (windspeed != undefined) {
		if (Number.isFinite(windspeed) === false) {
			result = false

			console.error('Windspeed is not a finite number')
		}

		if (windspeed < 0) {
			result = false

			console.error('Windspeed cant be smaller than 0')
		}
	}

	return result
}
