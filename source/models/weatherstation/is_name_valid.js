export default function (name) {
	let result = true

	if (name === undefined) {
		result = false

		console.error('Name is not defined')
	}

	if (typeof name !== 'string') {
		result = false

		console.error('Name is no string')
	}

	if (name === "") {
		result = false

		console.error('Name is empty')
	}

	return result
}
