export default function userIsAdmin(req) {
	if (req.user) {
		if (req.user.isAdmin) {
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}
