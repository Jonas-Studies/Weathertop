import get_weathercode from './get_one_new.js'

export default function () {
	// Liste übernommen von https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
	// Nötig da alle weathercodes von der openweathermap API gesendet werden können
	// Bei Änderungen muss manuell nachgebessert werden, gibt leider keine API dafür

	const result = [
		get_weathercode(200, 'Gewitter mit leichtem Regen', 'cloud-lightning-rain'),
		get_weathercode(201, 'Gewitter mit Regen', 'cloud-lightning-rain'),
		get_weathercode(202, 'Gewitter mit starkem Regen', 'cloud-lightning-rain'),
		get_weathercode(210, 'Leichtes Gewitter', 'cloud-lightning'),
		get_weathercode(211, 'Gewitter', 'cloud-lightning'),
		get_weathercode(212, 'Starkes Gewitter', 'cloud-lightning'),
		get_weathercode(221, 'Sehr starkes Gewitter', 'cloud-lightning'),
		get_weathercode(230, 'Gewitter mit leichtem Nieselregen', 'cloud-lightning-rain'),
		get_weathercode(231, 'Gewitter mit Nieselregen', 'cloud-lightning-rain'),
		get_weathercode(232, 'Gewitter mit starkem Nieselregen', 'cloud-lightning-rain'),

		get_weathercode(300, 'Schwacher Niselregen', 'cloud-drizzle'),
		get_weathercode(301, 'Niselregen', 'cloud-drizzle'),
		get_weathercode(302, 'Starker Niselregen', 'cloud-rain'),
		get_weathercode(310, 'Schwacher Niselregen', 'cloud-drizzle'),
		get_weathercode(311, 'Niselregen', 'cloud-drizzle'),
		get_weathercode(312, 'Starker Niselregen', 'cloud-rain'),
		get_weathercode(313, 'Starker Niselregen', 'cloud-rain'),
		get_weathercode(314, 'Sehr starker Niselregen', 'cloud-rain'),
		get_weathercode(321, 'Starker Niselregen', 'cloud-rain'),

		get_weathercode(500, 'Leichter Regen', 'cloud-rain'),
		get_weathercode(501, 'Regen', 'cloud-rain'),
		get_weathercode(502, 'Starker Regen', 'cloud-heavy'),
		get_weathercode(503, 'Sehr starker Regen', 'cloud-heavy'),
		get_weathercode(504, 'Sehr starker Regen', 'cloud-heavy'),
		get_weathercode(511, 'Hagel', 'cloud-hail'),
		get_weathercode(521, 'Leichter Regen', 'cloud-rain'),
		get_weathercode(522, 'Starker Regen', 'cloud-heavy'),
		get_weathercode(531, 'Sehr starker Regen', 'cloud-rain-heavy'),

		get_weathercode(600, 'Leichter Schneefall', 'cloud-snow'),
		get_weathercode(601, 'Schneefall', 'cloud-snow'),
		get_weathercode(602, 'Starker Schneefall', 'cloud-snow'),
		get_weathercode(611, 'Leichter Schneefall', 'cloud-snow'),
		get_weathercode(613, 'Schneefall', 'cloud-snow'),
		get_weathercode(615, 'Leichter Schneeregen', 'cloud-snow'),
		get_weathercode(616, 'Schneeregen', 'cloud-snow'),
		get_weathercode(620, 'Leichter Schneesturm', 'cloud-snow'),
		get_weathercode(621, 'Schneesturm', 'cloud-snow'),
		get_weathercode(622, 'Starker Schneesturm', 'cloud-snow'),

		get_weathercode(701, 'Nebelig', 'cloud-fog2'),
		get_weathercode(711, 'Rauch', 'cloud-fog2'),
		get_weathercode(721, 'Dunst', 'cloud-fog2'),
		get_weathercode(731, 'Staub', 'cloud-fog2'),
		get_weathercode(741, 'Nebelig', 'cloud-fog2'),
		get_weathercode(751, 'Sand', 'cloud-fog2'),
		get_weathercode(761, 'Staub', 'cloud-fog2'),
		get_weathercode(762, 'Ascheregen', 'cloud-fog2'),
		get_weathercode(771, 'Sturmböen', 'wind'),
		get_weathercode(781, 'Tornado', 'tornado'),

		get_weathercode(800, 'Sonnig', 'sun'),

		get_weathercode(801, 'Leicht bewölkt', 'cloud'),
		get_weathercode(802, 'Bewölkt', 'cloud'),
		get_weathercode(803, 'Stark bewölkt', 'clouds'),
		get_weathercode(804, 'Sehr stark bewölkt', 'clouds')
	]

	console.info('Loaded weathercodes')
	console.debug(result)

	return result
}
