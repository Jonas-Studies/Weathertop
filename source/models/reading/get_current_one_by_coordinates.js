import get_new_reading from './get_one_new.js'

import dotenv from "dotenv"

dotenv.config()

export default async function (latitude, longitude) {
	var result = undefined

	const weather = await get_current_weather_by_coordinates(latitude, longitude)

	if (weather != undefined) {
		result = get_new_reading(
			undefined,
			undefined,
			weather.weather[0].id,
			(weather.main.temp),
			'°C',
			(weather.wind.speed / 1000),
			'km/h',
			weather.wind.deg,
			'°',
			weather.main.pressure,
			'hpa',
			undefined
		)

		console.info('Loaded current reading for coordinates')
		console.debug(result)
	}
	else {
		console.error('Failed to load current reading for coordinates')
		console.debug('Latitude: ' + latitude + ', Longitude: ' + longitude)
	}

	return result	
}

async function get_current_weather_by_coordinates(latitude, longitude) {
	var result = undefined

	const response = await fetch(
		'https://api.openweathermap.org/data/2.5/weather?' + new URLSearchParams(
			{
				lat: latitude,
				lon: longitude,
				appid: process.env.API_KEY,
				units: 'metric'
			}
		)
	)

	if (response.status === 200) {
		result = await response.json()

		console.info('Loaded weatherdata from openweathermap')
		console.debug(result)
	}
	else {
		console.error('Failed to load weatherdata from openweathermap')
		console.debug(response.status)
	}

	return result
}
