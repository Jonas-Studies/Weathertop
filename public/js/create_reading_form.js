async function create_reading () {
	const weatherstationID = get_weatherstationID_from_document()
	const weathercode = get_weathercode_from_userinput()
	const temperature = get_temperature_from_userinput()
	const windspeed = get_windspeed_from_userinput()
	const airpressure = get_airpressure_from_userinput()

	await fetch("http://localhost:3000/reading/insert_one",
		{
			method: "POST",
			body: JSON.stringify(
				{
					weatherstationID: weatherstationID,
					weathercode: weathercode,
					temperature: temperature,
					windspeed: windspeed,
					airpressure: airpressure
				}
			),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}
	)
		.then((response) => console.info("Reading created"))
		.then((error) => console.error(error))
	
	location.reload()
}

function get_weathercode_from_userinput () {
	var result = undefined

	const weathercode_input = document.getElementById("create-reading-input-weathercode")

	if (weathercode_input) {
		console.debug("Loaded create-reading-input-weathercode")

		result = Number(weathercode_input.value)

		console.info("Loaded the weathercode " + result)
	}
	else {
		console.error("Could not load create-reading-input-weatherstation")
	}

	return result
}

function get_temperature_from_userinput () {
	var result = undefined

	const temperature_input = document.getElementById("create-reading-input-temperature")

	if (temperature_input) {
		console.debug("Loaded create-reading-input-temperature")

		result = Number(temperature_input.value)

		console.info("Loaded the temperature " + result)
	}
	else {
		console.error("Could not load create-reading-input-temperature")
	}

	return result
}

function get_windspeed_from_userinput () {
	var result = undefined

	const windspeed_input = document.getElementById("create-reading-input-windspeed")

	if (windspeed_input) {
		console.debug("Loaded create-reading-input-windspeed")

		result = Number(windspeed_input.value)

		console.info("Loaded the windspeed " + result)
	}
	else {
		console.error("Could not load create-reading-input-windspeed")
	}

	return result
}

function get_airpressure_from_userinput () {
	var result = undefined

	const airpressure_input = document.getElementById("create-reading-input-airpressure")

	if (airpressure_input) {
		console.debug("Loaded create-reading-input-airpressure")

		result = Number(airpressure_input.value)

		console.info("Loaded the airpressure " + result)
	}
	else {
		console.error("Could not load create-reading-input-airpressure")
	}

	return result
}

function get_weatherstationID_from_document () {
	var result = undefined

	const weatherstationID = document.getElementById("weatherstation-ID")

	if (weatherstationID) {
		console.debug("Loaded weatherstation-ID")

		result = weatherstationID.textContent

		console.info("Loaded the weatherstationID " + result)
	}
	else {
		console.error("Could not load weatherstation-ID")
	}

	return result
}
