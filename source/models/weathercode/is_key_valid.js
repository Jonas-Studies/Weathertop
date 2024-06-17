import get_weathercode_by_key from './get_one_by_key.js'

export default function (key) {
	let result = true

	if (key === undefined) {
		result = false

		console.error('Key is not defined')
	}

	if (Number.isFinite(key) === false) {
		result = false

		console.error('Key needs to be a finite number')
	}

	if (get_weathercode_by_key(key) === undefined) {
		result = false

		console.error('No weathercode for key existing')
	}

	return result
}
