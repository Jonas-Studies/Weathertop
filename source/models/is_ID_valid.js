export default function (ID) {
	let result = true

	if (ID === undefined) {
		result = false

		console.error('ID is not defined')
	}

	if (Number.isFinite(ID) === false) {
		result = false

		console.error('ID is not a finite number')
	}

	if (ID < 1) {
		result = false

		console.error('ID needs to be bigger than 0')
	}

	return result
}
