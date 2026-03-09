let input = document.querySelector('.cityName');
let btn = document.querySelector('.searchBtn');
let temp = document.querySelector('.temp');
let cityName = document.querySelector('.city');
let windMeasure = document.querySelector('.windInfo');
let humidMeasure = document.querySelector('.humidityInfo');
let weatherInfo = document.querySelector('.weatherImg')

const OPENWEATHER_API_KEY = 'YOUR_OPENWEATHER_API_KEY_HERE';
const OPENWEATHER_API_KEY_STORAGE_KEY = 'openweather_api_key';

let apiKeyPromptShown = false;

function getApiKey() {
    const storedKey = localStorage.getItem(OPENWEATHER_API_KEY_STORAGE_KEY);
    if (storedKey && storedKey.trim().length > 0) {
        return storedKey.trim();
    }

    if (OPENWEATHER_API_KEY && OPENWEATHER_API_KEY !== 'YOUR_OPENWEATHER_API_KEY_HERE') {
        return OPENWEATHER_API_KEY;
    }

    if (!apiKeyPromptShown) {
        apiKeyPromptShown = true;
        const entered = prompt('Enter your OpenWeather API key (it will be saved in this browser):');
        if (entered && entered.trim().length > 0) {
            const trimmed = entered.trim();
            localStorage.setItem(OPENWEATHER_API_KEY_STORAGE_KEY, trimmed);
            return trimmed;
        }
        alert('OpenWeather API key is required to use this app.');
    }

    return null;
}

function getResponseCode(data) {
    return Number(data?.cod);
}

btn.addEventListener('click', getInfo);

document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        getInfo();
    }
});

async function getInfo() {

    const apiKey = getApiKey();
    if (!apiKey) {
        return;
    }

    if (input.value.length > 0) {

        let city = input.value.toLowerCase().trim();
        input.value = '';

			let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            let res = await fetch(url)
            let data = await res.json();

            const code = getResponseCode(data);

            if (code === 401 || code === 403) {
                alert(`Invalid API key: ${data?.message ?? 'Unauthorized'}`);
            } else if (code === 404) {
                alert('Invalid City Name');
            } else if (code > 199 && code < 300) {

                temp.innerHTML = `${Math.round(data.main.temp)}°C`;
                cityName.innerHTML = data.name;
                windMeasure.innerHTML = `${Math.round(data.wind.speed)}km/hr`;
                humidMeasure.innerHTML = `${Math.round(data.main.humidity)}%`;
                weatherInfo.setAttribute(`src`, `./assets/${data.weather[0].main.toLowerCase()}.png`);
                weatherInfo.setAttribute(`alt`, `${data.weather[0].main}`);

            } else if (code > 399 && code < 500) {

                alert('Error from user side.');

            } else if (code > 499 && code < 600) {

                alert('Error from Server side.');

            } else {
                alert('Unexpected response from weather service.');
            }
                    
    } else {
        alert('Enter City Name');
    }
}

onload = async () => {
    const apiKey = getApiKey();
    if (!apiKey) {
        return;
    }

    let city = 'new delhi';
    input.value = '';

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let res = await fetch(url)
    let data = await res.json();

    const code = getResponseCode(data);

    if (code === 401 || code === 403) {
        alert(`Invalid API key: ${data?.message ?? 'Unauthorized'}`);
    } else if (code === 404) {
        alert('Invalid City Name');
    } else if (code > 199 && code < 300) {

        temp.innerHTML = `${Math.round(data.main.temp)}°C`;
        cityName.innerHTML = data.name;
        windMeasure.innerHTML = `${Math.round(data.wind.speed)}km/hr`;
        humidMeasure.innerHTML = `${Math.round(data.main.humidity)}%`;
        weatherInfo.setAttribute(`src`, `./assets/${data.weather[0].main.toLowerCase()}.png`);
        weatherInfo.setAttribute(`alt`, `${data.weather[0].main.toLowerCase()}`);

    } else if (code > 399 && code < 500) {

        alert('Error from user side.');

    } else if (code > 499 && code < 600) {

        alert('Error from Server side.');

    } else {
        alert('Unexpected response from weather service.');
    }
}