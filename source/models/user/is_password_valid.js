export default function (password) {
	const result = true

	if (password === undefined) {
		result = false

		console.info('Password is undefined')
	}

	if (typeof password !== 'string') {
		result = false

		console.info('Password is no string')
	}

	if (password === "") {
		result = false

		console.info('Password is empty')
	}

	return result
}
