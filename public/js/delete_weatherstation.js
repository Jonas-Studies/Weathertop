async function delete_weatherstation_by_id (id, redirect_to_dashboard) {
	if (id != undefined) {
		const response = await fetch(
			'http://localhost:3000/weatherstation/delete_one_by_id',
			{
				method: "POST",
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				},
				body: JSON.stringify(
				{
						weatherstation_ID: id
					}
				)
			}
		)

		if (response.status = 200) {
			console.info("Deleted weatherstation")

			if (redirect_to_dashboard === true) {
				location.href = '/dashboard'
			}
			else {
				location.reload()
			}
		}
		else {
			console.log("Failed to delete weatherstation")
			console.debug(response)
		}
	}
}
