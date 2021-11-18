const APIURL ='98ec5a68cd7bf513872485b014bae2a2';
const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIURL}`;
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getWeatherBycity(city){
    const resp = await fetch(url(city), {origin: "cors"});
    const respData = await resp.json();

    addWeatherToPage(respData);
}

function KtoC(K){
    return (K - 273.15).toFixed(2);
}

function addWeatherToPage(data){
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');

    weather.classList.add('weather');

    weather.innerHTML = `
        <small>There are</small>
        <h2>${temp}C</h2>
        <p>${search.value}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;

    main.innerHTML = '';
    main.appendChild(weather);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;

    if(city){
        getWeatherBycity(city);
    }
});