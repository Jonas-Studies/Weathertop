export default function (username) {
	let result = true

	if (username === undefined) {
		result = false

		console.info('Username is undefined')
	}

	if (typeof username !== 'string') {
		result = false

		console.info('Username is no string')
	}

	if (username === "") {
		result = false

		console.info('Username is empty')
	}

	return result
}
