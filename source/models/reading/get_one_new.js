import get_weather_by_key from '../weathercode/get_one_by_key.js'

export default function (ID, weatherstation_ID, weathercode, temperature, unit_of_temperature, windspeed, unit_of_windspeed, winddirection, unit_of_winddirection, airpressure, unit_of_airpressure, created_on) {
	let created_on_text = 'N/A'

	if (created_on != undefined) {
		created_on_text = get_germanFormatted_timestamp(created_on)
	}

	let weathercode_text = 'N/A'

	if (weathercode != undefined) {
		const weather = get_weather_by_key(weathercode)

		weathercode_text = weather.name
	}

	const result = {
		ID: ID,
		weatherstation_ID: weatherstation_ID,
		weathercode: weathercode,
		weathercode_text: weathercode_text,
		temperature: temperature,
		unit_of_temperature: unit_of_temperature,
		windspeed: windspeed,
		unit_of_windspeed: unit_of_windspeed,
		winddirection: winddirection,
		unit_of_winddirection: unit_of_winddirection,
		airpressure: airpressure,
		unit_of_airpressure: unit_of_airpressure,
		created_on: created_on,
		created_on_text: created_on_text
	}

	console.info("Loaded reading")
	console.debug(result)

	return result
}

function get_germanFormatted_timestamp(timestamp) {
	let result = 'N/A'
	
	const options = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	};

	result = new Intl.DateTimeFormat('de-DE', options).format(timestamp);

	console.info('Loaded timestamp as german text')
	console.debug(result)

	return result.replace(',', '');
}
