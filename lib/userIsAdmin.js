export default function userIsAdmin(req) {
	if (req.user) {
		if (req.user.isAdmin) {
			console.log('user is an admin')
			return true
		} else {
			console.log('user is not an admin')
			return false
		}
	} else {
		console.log('user is not an admin')
		return false
	}
}
