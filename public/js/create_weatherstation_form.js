async function init_create_weatherstation_form () {
	window.addEventListener('load', set_map)
}

async function set_map () {
	// Sets the map centered on Regensburg
	let map = L.map('map').setView( [49.01513, 12.10161], 13 )

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    maxZoom: 19,
	    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	set_markers(map)

	map.on('click', set_coordinates_by_mapclick)

	console.info('Finished the maps setup')
}

async function set_markers (map) {
	const weatherstations = await get_weatherstations()

	if (weatherstations != undefined) {
		for (var index_of_weatherstation = 0; index_of_weatherstation < weatherstations.length; index_of_weatherstation += 1) {
			const weatherstation = weatherstations[index_of_weatherstation]

			const marker = L.marker( [ weatherstation.latitude, weatherstation.longitude ] ).addTo(map)
			marker.bindPopup('<a href="http://localhost:3000/weatherstation/' + weatherstation.ID + '">' + weatherstation.name + '</a>')

			console.info('Added marker')
		}
	}
}

async function get_weatherstations () {
	let result = undefined

	const response = await fetch(
		'http://localhost:3000/weatherstation/get_many',
		{
			method: 'GET'
		}
	)

	if (response.status === 200) {
		const data = await response.json()

		result = data.weatherstations

		console.info('Loaded weatherstations')
		console.debug(result)
	}
	else {
		console.error('Failed to fetch weatherstations')
		console.debug(response)
	}

	return result
}

function set_coordinates_by_mapclick (e) {
	set_latitude(e.latlng.lat)
	set_longitude(e.latlng.lng)
}

function set_latitude (latitude) {
	const ELEMENT_NAME = "create-weatherstation-input-latitude"
	const input = document.getElementById(ELEMENT_NAME)

	if (input != undefined) {
		input.value = latitude
	}
}

function add_weatherstation_to_map (weatherstation_ID) {
	let map = L.map('map')

	var marker = L.marker( [49.01513, 12.10161] ).addTo(map)
	marker.bindPopup("<p>Regensburg</p>")
}

function set_longitude (longitude) {
	const ELEMENT_NAME = "create-weatherstation-input-longitude"
	const input = document.getElementById(ELEMENT_NAME)

	if (input != undefined) {
		input.value = longitude
	}
}


async function create_weatherstation () {
	const name = get_weatherstationName_by_userinput()
	const latitude = get_weatherstationLatitude_by_userinput()
	const longitude = get_weatherstationLongitude_by_userinput()

	if (name != undefined && latitude != undefined && longitude != undefined) {
		await fetch("http://localhost:3000/weatherstation/insert_one_new",
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

		location.reload()
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
