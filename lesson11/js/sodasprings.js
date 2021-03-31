window.addEventListener('load', async ()=>{
    let city= document.getElementById("city");
    let prestonForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city},ID,US&id=5604473&appid=618f5cc873c6aa9fb8dfc23fe6b7980f&units=imperial`;
    let prestonSummary = `https://api.openweathermap.org/data/2.5/weather?q=${city},ID,US&id=5604473&appid=618f5cc873c6aa9fb8dfc23fe6b7980f&units=imperial`;

    prestonForecast = (await(await fetch(prestonForecast)).json()).list.filter(time => (time.dt + 21600) % 86400 == 0);
    prestonSummary = await(await fetch(prestonSummary)).json()
    console.log(prestonForecast);
    console.log(prestonSummary);

    document.getElementById('forecast').innerHTML = prestonSummary.weather[0].main;
    document.getElementById('temp').innerHTML = prestonSummary.main.temp;
    document.getElementById('humidity').innerHTML = prestonSummary.main.humidity;
    document.getElementById('windSpeed').innerHTML = prestonSummary.wind.speed;

    if (prestonSummary.main.temp <= 50 && prestonSummary.wind.speed > 3.0) {
        const windChill = 35.74 + (0.6215 * prestonSummary.main.temp)
        - (35.75 * (prestonSummary.wind.speed ** 0.16))
        + ((0.4275 * prestonSummary.main.temp) * prestonSummary.wind.speed ** 0.16);
        document.getElementById('windChill').innerHTML = Math.round(windChill * 10) / 10;
    }
    const forecastFive = document.getElementsByClassName("fiveDayForecast")
    for (let i=0; i < forecastFive.length; i++) {
        forecastFive[i].childNodes[0].innerHTML = new Date(prestonForecast[i].dt * 1000)
            .toString().substr(0,3);
        forecastFive[i].childNodes[1].src = `https://openweathermap.org/img/w/${prestonForecast[i].weather[0].icon}.png`;
        forecastFive[i].childNodes[1].alt = ' Forecast Icon ';
        forecastFive[i].childNodes[2].innerHTML = `${prestonForecast[i].main.temp}&#176;F`;

    }
});