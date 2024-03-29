/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  let linc = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  //HINT: Use template literals to create a url with input and an API key
  fetch(linc)
  .then(response => response.json() )
  .then(data => showWeatherData(data))
  //CODE GOES HERE
}


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
 
  // CODE GOES HERE

}


/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  document.getElementById('city-name')
  .innerText = weatherData.name
  console.log(weatherData.name)
  document.getElementById('weather-type')
  .innerHTML = weatherData.weather[0].main
  document.getElementById('temp')
  .innerHTML = weatherData.main.temp
  document.getElementById('min-temp')
  .innerHTML = weatherData.main.temp_min
  document.getElementById('max-temp')
  .innerHTML = weatherData.main.temp_max

  
  //

  //CODE GOES HERE
  
}

