<<<<<<< HEAD
const apiKey = 'ce0d8e22ae078225c1435285c601c804'; // Replace with your actual API key
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weather-condition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const weatherInfo = document.querySelector('.weather-info');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Log the API response

    if (data.cod === 200) {
      // Update the UI with weather data
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      weatherCondition.textContent = `Weather: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

      // Show the weather info section
      weatherInfo.style.display = 'block';
    } else {
      alert('City not found. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
=======
const apiKey = 'ce0d8e22ae078225c1435285c601c804'; // Replace with your actual API key
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weather-condition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const weatherInfo = document.querySelector('.weather-info');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},CA&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Log the API response

    if (data.cod === 200) {
      // Update the UI with weather data
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      weatherCondition.textContent = `Weather: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

      // Show the weather info section
      weatherInfo.style.display = 'block';
    } else {
      alert('City not found. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
>>>>>>> 7b702e5450c5e2ce2f28a7e4eade810dba2069a9
}