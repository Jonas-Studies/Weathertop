import get_weathercodes from './get_many.js'

export default function (key) {
	let result = undefined

	const weathercodes = get_weathercodes()

	if (weathercodes != undefined) {
		for (let index_of_weathercode = 0; index_of_weathercode < weathercodes.length; index_of_weathercode += 1) {
			const weathercode = weathercodes[index_of_weathercode]

			if (weathercode.key === key) {
				result = weathercode

				console.info('Loaded weathercode')
				console.debug(result)

				break
			}
		}
	}
	else {
		console.error('Failed to load weathercode by key')
		console.debug(key)
	}

	if (result == undefined) {
		console.error('Could not find a weathercode for given key')
		console.debug(key)
	}

	return result
}
