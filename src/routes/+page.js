export const load = async ({ fetch }) => {
	console.log('home page universal load funciton called');
	const response = await fetch('/api/current-time');
	const currentTime = await response.text();
	return { currentTime };
};

export const prerender = true;
