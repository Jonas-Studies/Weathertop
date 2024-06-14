import get_weathercode from './get_one_new.js'

export default function () {
	const result = [
		get_weathercode(211, 'Gewitter', 'cloud-lightning-rain'),

		get_weathercode(301, 'Niselregen', 'cloud-drizzle'),

		get_weathercode(501, 'Regen', 'cloud-rain'),

		get_weathercode(601, 'Schnee', 'snow'),

		get_weathercode(741, 'Nebelig', 'cloud-fog2'),

		get_weathercode(800, 'Sonnig', 'sun'),

		get_weathercode(801, 'Leicht bewölkt', 'cloud')
	]

	console.info('Loaded weathercodes')
	console.debug(result)

	return result
}
