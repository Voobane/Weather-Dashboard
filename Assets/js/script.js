// ./Assets/js/script.js
const apiKey = 'a5eb2e88e2bbb30aa6b7e6d6d5b57e6';
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const currentWeather = document.getElementById('currentWeather');
const forecastContainer = document.getElementById('forecastContainer');
const searchHistory = document.getElementById('searchHistory');

let searchHistoryList = JSON.parse(localStorage.getItem('searchHistory')) || [];

function saveSearchHistory(city) {
    if (!searchHistoryList.includes(city)) {
        searchHistoryList.push(city);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistoryList));
        renderSearchHistory();
    }
}

function renderSearchHistory() {
    searchHistory.innerHTML = '';
    searchHistoryList.forEach(city => {
        const cityItem = document.createElement('li');
        cityItem.textContent = city;
        cityItem.addEventListener('click', () => {
            fetchWeatherData(city);
        });
        searchHistory.appendChild(cityItem);
    });
}

async function fetchWeatherData(city) {
    try {
        const currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const currentData = await currentResponse.json();
        displayCurrentWeather(currentData);

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);
        
        saveSearchHistory(city);
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}

function displayCurrentWeather(data) {
    currentWeather.innerHTML = `
        <div class="weather">
            <div class="date">${new Date(data.dt * 1000).toLocaleDateString()}</div>
            <div class="city">${data.name}</div>
            <div class="icon"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon"></div>
            <div class="temp">Temp: ${data.main.temp}°C</div>
            <div class="humidity">Humidity: ${data.main.humidity}%</div>
            <div class="wind">Wind: ${data.wind.speed} m/s</div>
        </div>
    `;
}

function displayForecast(data) {
    forecastContainer.innerHTML = '';
    const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 5);
    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        const temp = forecast.main.temp;
        const humidity = forecast.main.humidity;
        const wind = forecast.wind.speed;
        const icon = forecast.weather[0].icon;
        
        const forecastElement = document.createElement('div');
        forecastElement.classList.add('weather');
        forecastElement.innerHTML = `
            <div class="date">${date}</div>
            <div class="icon"><img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon"></div>
            <div class="temp">Temp: ${temp}°C</div>
            <div class="humidity">Humidity: ${humidity}%</div>
            <div class="wind">Wind: ${wind} m/s</div>
        `;
        forecastContainer.appendChild(forecastElement);
    });
}

cityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city);
        cityInput.value = '';
    }
});

renderSearchHistory();
