const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weather-condition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const weatherIcon = document.getElementById('icon');
const weatherInfo = document.querySelector('.weather-info');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Log the API response

    if (data.cod === 200) {
      // Update the UI with weather data
      cityName.textContent = data.name;
      temperature.textContent = `${data.main.temp}°C`;
      weatherCondition.textContent = data.weather[0].description;
      humidity.innerHTML = `<i class="fas fa-tint"></i> ${data.main.humidity}%`;
      windSpeed.innerHTML = `<i class="fas fa-wind"></i> ${data.wind.speed} m/s`;

      // Set weather icon
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      // Show the weather info section
      weatherInfo.style.display = 'block';
    } else {
      alert('City not found. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
