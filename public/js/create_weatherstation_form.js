function create_weatherstation () {
	const name = get_weatherstationName_by_userinput()
	const latitude = get_weatherstationLatitude_by_userinput()
	const longitude = get_weatherstationLongitude_by_userinput()
	
	fetch("http://localhost:3000/weatherstation/insert_one",
		{
			method: "POST",
			body: JSON.stringify(
				{
					name: name,
					latitude: latitude,
					longitude: longitude
				}
			),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}
	)
		.then((response) => console.info("Reading created"))
		.then((error) => console.error(error))
}

function get_weatherstationName_by_userinput () {
	var result = undefined

	const ELEMENT_NAME = "create-weatherstation-input-name"
	const input = document.getElementById(ELEMENT_NAME)

	if (input != undefined) {
		console.debug("Loaded " + ELEMENT_NAME + " from document")

		result = input.value

		console.info("Loaded the name " + result)
	}
	else {
		console.error("Could not load the " + ELEMENT_NAME + " from document")
	}

	return result
}

function get_weatherstationLatitude_by_userinput () {
	var result = undefined

	const ELEMENT_NAME = "create-weatherstation-input-latitude"
	const input = document.getElementById(ELEMENT_NAME)

	if (input != undefined) {
		console.debug("Loaded " + ELEMENT_NAME + " from document")

		result = Number(input.value)

		console.info("Loaded the name " + result)
	}
	else {
		console.error("Could not load the " + ELEMENT_NAME + " from document")
	}

	return result
}

function get_weatherstationLongitude_by_userinput () {
	var result = undefined

	const ELEMENT_NAME = "create-weatherstation-input-longitude"
	const input = document.getElementById(ELEMENT_NAME)

	if (input != undefined) {
		console.debug("Loaded " + ELEMENT_NAME + " from document")

		result = Number(input.value)

		console.info("Loaded the name " + result)
	}
	else {
		console.error("Could not load the " + ELEMENT_NAME + " from document")
	}

	return result
}
