async function delete_reading_by_id (id) {
	if (id != undefined) {
		const response = await fetch(
			'http://localhost:3000/reading/delete_one_by_id',
			{
				method: "POST",
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				},
				body: JSON.stringify(
				{
						reading_ID: id
					}
				)
			}
		)

		if (response.status = 200) {
			console.info("Deleted reading")

			location.reload()
		}
		else {
			console.log("Failed to delete reading")
			console.debug(response)
		}
	}
}
