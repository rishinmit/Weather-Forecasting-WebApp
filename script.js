document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '_';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementById('feelslike_c').textContent = data.current.feelslike_c;
            document.getElementById('dewpoint_c').textContent = data.current.dewpoint_c;
            document.getElementById('humidity').textContent = data.current.humidity;
            document.getElementById('wind_kph').textContent = data.current.wind_kph;
            document.getElementById('wind_dir').textContent = data.current.wind_dir;
            document.getElementById('localtime').textContent = data.location.localtime;
            document.getElementById('region').textContent = data.location.region;
            document.getElementById('pressure_mb').textContent = data.current.pressure_mb;
            console.log(data);
        })
        .catch(error => {
            console.error('Problem', error);
        });
});
