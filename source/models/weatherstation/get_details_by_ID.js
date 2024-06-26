import get_latest_reading_by_weatherstation_ID from '../reading/get_latest_one_by_weatherstation_ID.js'
import get_weathercode_by_key from '../weathercode/get_one_by_key.js'
import get_hightest_temperature_by_weatherstation_ID from '../reading/get_hightest_temperature_by_weatherstation_ID.js'
import get_lowest_temperature_by_weatherstation_ID from '../reading/get_lowest_temperature_by_weatherstation_ID.js'
import get_hightest_airpressure_by_weatherstation_ID from '../reading/get_hightest_airpressure_by_weatherstation_ID.js'
import get_lowest_airpressure_by_weatherstation_ID from '../reading/get_lowest_airpressure_by_weatherstation_ID.js'
import get_hightest_windspeed_by_weatherstation_ID from '../reading/get_hightest_windspeed_by_weatherstation_ID.js'
import get_lowest_windspeed_by_weatherstation_ID from '../reading/get_lowest_windspeed_by_weatherstation_ID.js'
import get_temperatures_tendency_by_weatherstation_ID from '../reading/get_temperature_tendency_by_weatherstation_ID.js'
import get_windspeeds_tendency_by_weatherstation_ID from '../reading/get_windspeed_tendency_by_weatherstation_ID.js'
import get_airpressures_tendency_by_weatherstation_ID from '../reading/get_airpressure_tendency_by_weatherstation_ID.js'

export default async function (weatherstation_ID) {
	var result = undefined

	const latest_reading = await get_latest_reading_by_weatherstation_ID(weatherstation_ID)

	if (latest_reading != undefined) {
		const weathercode = get_weathercode_by_key(latest_reading.weathercode)
		const temperature_tendency = await get_temperatures_tendency_by_weatherstation_ID(weatherstation_ID)
		const windspeed_tendency = await get_windspeeds_tendency_by_weatherstation_ID(weatherstation_ID)
		const airpressure_tendency = await get_airpressures_tendency_by_weatherstation_ID(weatherstation_ID)

		result = {
			weathercode: weathercode,
			temperature: {
				value: latest_reading.temperature,
				unit: latest_reading.unit_of_temperature,
				icon_name: get_temperature_iconName_by_temperature(latest_reading.temperature),
				minvalue: await get_lowest_temperature_by_weatherstation_ID(weatherstation_ID),
				maxvalue: await get_hightest_temperature_by_weatherstation_ID(weatherstation_ID),
				tendency_icon_name: get_iconName_by_tendency(temperature_tendency)
			},
			windspeed: {
				value: latest_reading.windspeed,
				unit: latest_reading.unit_of_windspeed,
				minvalue: await get_lowest_windspeed_by_weatherstation_ID(weatherstation_ID),
				maxvalue: await get_hightest_windspeed_by_weatherstation_ID(weatherstation_ID),
				tendency_icon_name: get_iconName_by_tendency(windspeed_tendency)
			},
			winddirection: {
				value: latest_reading.winddirection,
				unit: latest_reading.unit_of_winddirection,
				text: get_winddirection_as_text(latest_reading.winddirection),
				icon_name: undefined
			},
			airpressure: {
				value: latest_reading.airpressure,
				unit: latest_reading.unit_of_airpressure,
				minvalue: await get_lowest_airpressure_by_weatherstation_ID(weatherstation_ID),
				maxvalue: await get_hightest_airpressure_by_weatherstation_ID(weatherstation_ID),
				tendency_icon_name: get_iconName_by_tendency(airpressure_tendency)
			}
		}
	}

	return result
}

function get_temperature_iconName_by_temperature (temperature) {
	let result = 'thermometer-half'

	if (temperature < 2) {
		result = 'thermometer-snow'
	}
	else if (temperature < 17) {
		result = 'thermometer-low'
	}
	else if (temperature < 30) {
		result = 'thermometer-half'
	}
	else {
		result = 'thermometer-high'
	}

	return result
}

function get_winddirection_as_text (winddirection) {
	let result = 'N/A'

	if (winddirection >= 0 && winddirection <= 360) {
		if (winddirection < 45) {
			result = 'Nordosten'
		}
		else if (winddirection < 90) {
			result = 'Osten'
		}
		else if (winddirection < 135) {
			result = 'Südosten'
		}
		else if (winddirection < 180) {
			result = 'Süden'
		}
		else if (winddirection < 225) {
			result = 'Südwesten'
		}
		else if (winddirection < 270) {
			result = 'Westen'
		}
		else if (winddirection < 315) {
			result = 'Nordwesten'
		}
		else {
			result = 'Norden'
		}

		console.info('Loaded winddirection as text')
		console.debug(result)
	}
	else {
		console.error('Winddirection out of bounds')
		console.debug(winddirection)
	}

	return result
}

function get_iconName_by_tendency (tendency) {
	let result = 'arrow-right'

	const TENDENCY_RANGE = 0.3

	if (tendency > TENDENCY_RANGE) {
		result = 'arrow-up-right'
	}

	if (tendency < (-1 * TENDENCY_RANGE)) {
		result = 'arrow-down-right'
	}

	return result
}
