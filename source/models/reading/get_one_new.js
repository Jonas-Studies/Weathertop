import get_weathercode_by_key from '../weathercode/get_one_by_key.js'

export default function (ID, weatherstation_ID, weathercode, temperature, unit_of_temperature, windspeed, unit_of_windspeed, winddirection, unit_of_winddirection, airpressure, unit_of_airpressure, created_on) {
	const result = {
		ID: ID,
		weatherstation_ID: weatherstation_ID,
		weathercode: get_weathercode_by_key(weathercode),
		temperature: {
			value: temperature,
			unit: unit_of_temperature,
			icon_name: get_temperature_iconName_by_temperature(temperature)
		},
		windspeed: {
			value: windspeed,
			unit: unit_of_windspeed
		},
		winddirection: {
			value: winddirection,
			unit: unit_of_winddirection,
			text: get_winddirection_as_text(winddirection)
		},
		airpressure: {
			value: airpressure,
			unit: unit_of_airpressure
		},
		created_on: created_on
	}

	console.info("Loaded reading")
	console.debug(result)

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

	if (winddirection > 0 && winddirection < 360) {
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
	}
}	
