export function getHeader() {
  const ip = new Array(4).fill(0).map(() => parseInt(Math.random() * 255)).join(".")
  return {
		headers: {
			"Cache-Control": 'no-cache',
			"Content-Type": 'application/x-www-form-urlencoded',
			"Postman-Token": Date.now(),
			"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
			"X-Forwarded-For": ip
		},
		hostname: 'https://tinypng.com',
		method: 'POST',
		path: '/web/shrink',
		rejectUnauthorized: false
	}
}