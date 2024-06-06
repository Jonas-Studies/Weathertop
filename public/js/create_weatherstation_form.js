function create_weatherstation () {
	const name = get_weatherstationName_by_userinput()
	const latitude = get_weatherstationLatitude_by_userinput()
	const longitude = get_weatherstationLongitude_by_userinput()

	if (name != undefined && latitude != undefined && longitude != undefined) {
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
	else {
		console.error("Could not create weatherstation")
	}
}

function get_weatherstationName_by_userinput () {
	var result = undefined

	const ELEMENT_NAME = "create-weatherstation-input-name"
	const input = document.getElementById(ELEMENT_NAME)

	if (input != undefined) {
		console.debug("Loaded " + ELEMENT_NAME + " from document")

		if (typeof input.value === "string" && input !== "") {
			result = input.value

			console.info("Loaded the name " + result)
		}
		else {
			console.error("Invalid value for name")
		}

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

		const latitude = Number(input.value)

		if (isNaN(latitude) === false) {
			result = latitude

			console.info("Loaded the latitude " + latitude)
		}
		else {
			console.error("Invalid value for latitude")
		}

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

		const longitude = Number(input.value)

		if (isNaN(longitude) === false) {
			result = Number(input.value)

			console.info("Loaded the name " + result)

		}
		else {
			console.error("Invalid value for longitude")
		}

	}
	else {
		console.error("Could not load the " + ELEMENT_NAME + " from document")
	}

	return result
}
