import get_new_user from './get_one_new.js'
import insert_user from './insert_one.js'

export default async function (name, password) {
	const new_user = get_new_user(undefined, name, password)

	insert_user(new_user)
}
