export default function (ID, weatherstation_ID, weathercode, temperature, unit_of_temperature, windspeed, unit_of_windspeed, airpressure, unit_of_airpressure, created_on) {
	return {
		ID: ID,
		weatherstation_ID: weatherstation_ID,
		weathercode: weathercode,
		temperature: {
			value: temperature,
			unit: unit_of_temperature
		},
		windspeed: {
			value: windspeed,
			unit: unit_of_windspeed
		},
		airpressure: {
			value: airpressure,
			unit: unit_of_airpressure
		},
		created_on: created_on
	}
}
