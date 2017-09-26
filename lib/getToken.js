const parseToken = (tokString) => {
	let tok
	try {
		tok = tokString.match('\"(.+)\"')[1]
	} catch (err) {
		console.log('error parsing out token from Authorization header: ' + err)
	}
	return tok
}

export default function getToken(req) {
	if (req.get('Authorization')) {
		let token = parseToken(req.get('Authorization'))
		return token
	} else {
		return null
	}
}
