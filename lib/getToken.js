const parseToken = (tokString) => {
	let tok = tokString.match('\"(.+)\"')[1]
	return tok
}

export default function getToken(req) {
	let token = parseToken(req.get('Authorization'))
	return token
}
