import get_weathercode from './get_one_new.js'

export default function () {
	const result = [
		get_weathercode(211, 'Gewitter'),

		get_weathercode(301, 'Niselregen'),

		get_weathercode(501, 'Regen'),

		get_weathercode(601, 'Schnee'),

		get_weathercode(741, 'Nebelig'),

		get_weathercode(800, 'Klar'),

		get_weathercode(801, 'Leicht bewölkt')
	]

	return result
}
