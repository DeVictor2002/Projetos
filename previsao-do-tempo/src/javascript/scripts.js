
const key = "**********************************";

function viewData(data) {
    document.querySelector('.tittle').innerHTML = data.name + ", " + data.sys.country;
    document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + 'ºC';
    document.querySelector('.forecast-text').innerHTML = data.weather[0].description;
    document.querySelector('.humidity').innerHTML = 'Humidade: ' + data.main.humidity + '%';
    document.querySelector('.forecast-img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;  

    console.log(data);
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    viewData(data);
}

function clickOnButton () {
    const city = document.querySelector('.city-input').value;
    searchCity(city);
}

