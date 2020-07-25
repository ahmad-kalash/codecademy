const createVenueHTML = (name, photoSrc, category,location, iconSource) => {
  return `<h2>${name}</h2>
          <h3>${category}</h3>
          <img class="venueimage" src="${photoSrc}"/> 
  <img class="venueimage" src="${iconSource}"/>  
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}

const createWeatherHTML = (currentDay) => {
  console.log(currentDay) 
  // .getDay() method to get an integer representing the current day of the week. Use the provided weekDays array to retrieve a string with the day’s name.
  //ou can get DAY_TEMP from day.main.temp
  return `<h2>${weekDays[(new Date()).getDay()]}</h2> 
    <h2>Temperature: ${fToC(kelvinToFahrenheit(currentDay.main.temp))}&deg;C</h2>
    <h2>humidity: ${currentDay.main.humidity}</h2>
    <h2>Condition: ${currentDay.weather[0].description}</h2>
  	<img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
}

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);
const  fToC = (fTemp) => ((fTemp - 32) * 5 / 9).toFixed(0); 