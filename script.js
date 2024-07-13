document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '68f193929564427da70184519241107';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById('feelslike_c').textContent = data.current.feelslike_c;            console.log(data);
        })
        .catch(error => {
            console.error('Problem', error);
        });
});
