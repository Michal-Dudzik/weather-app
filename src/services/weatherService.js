const API_KEU = '144970a7d480f6e1413b70a2c6ecae1c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
	const url = new URL(BASE_URL + '/' + infoType);
	url.search = new URLSearchParams({ ...searchParams, appid: API_KEU });

	return fetch(url)
		.then((res) => res.json())
		.then((data) => data);
};

export default getWeatherData;
