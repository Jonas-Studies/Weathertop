export default function (winddirection) {
	let result = true

	if (winddirection != undefined) {
		if (Number.isFinite(winddirection) === false) {
			result = false

			console.error('Winddirection is not a finite number')
		}

		if (winddirection < 0 || winddirection > 360) {
			result = false

			console.error('Winddirection is not in range')
		}
	}

	return result
}
