function getWeatherData(location)
{
  const apiKey = "2060afecd4e502524553ce16fe102ebb"
  const city = location
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

return fetch(url)
  .then(response => response.json())
  .then(data=> {
    const weatherData = {
      temperature: data.main.temp,
      condition: data.weather[0].main,
      location: data.name,
    };
    document.getElementById("Temperature").innerText = "Temperature: " + weatherData.temperature + " Degrees C";
    document.getElementById("Condition").innerText = "Condition: " + weatherData.condition;
    document.getElementById("Location").innerText = "Location: " + weatherData.location;
  
  });
}

