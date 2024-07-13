const url = 'http://api.weatherapi.com/v1/current.json?key=68f193929564427da70184519241107&q=London';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '68f193929564427da70184519241107',
		'x-rapidapi-host': 'http://api.weatherapi.com/'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error(error));
