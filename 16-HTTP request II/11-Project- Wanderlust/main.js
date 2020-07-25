// Foursquare API Info
const clientId = 'NBNIISL35DXAER1QQ4KQ0C3R0AAUF0XEX1GHJIFP3FBJPGPH'; //Save the client ID you obtained from the Foursquare API
const clientSecret = 'WJ3KQDLAX0SE1NORZJ3UFJ2QCLW4KZJPA43EB5BVCVZSCYFJ';//Save the client secret you obtained from the Foursquare API 
const url = 'https://api.foursquare.com/v2/venues/explore?';   //Create a const called url. Check the Foursquare documentation to see the explore venue API endpoint.  Add the near parameter without a value. To add a query to the end of a URL, be sure to use ? followed by the first key (near) and an =. You’ll add the value of the near parameter to this URL string when you make the request itself.

// OpenWeather Info
const openWeatherKey = '7c45e739b8b05b38f826760c1c41c718'; //Save the API Key you obtained from OpenWeather
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';  //See examples of OpenWeather API calls under ‘Examples of API calls’ on the OpenWeather documentation.

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {  //Get Data from Foursquare
const city = $input.val(); //Save the value from the user’s input field
//This string will contain the combined text of the entire request URL (he API endpoint URL(the user’s input city, a limit parameter with the number of venues you wish to return (use 10), the client_id parameter and your client ID, the client_secret parameter and your client secret, the v (version) parameter and today’s date in this format: YYYYMMDD)
const urlToFetch = `${url}near=${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200716`;

try{
  const response = await fetch(urlToFetch);
  if (response.ok)
  {
    const jsonResponse = await response.json(); //Convert the response object to a JSON object.  
  //  console.log(jsonResponse); //Make sure that you have your own browser’s JavaScript console open so that you can see the response that is logged to the console.
    let venues = jsonResponse.response.groups[0].items;  //Explore the object in the console. There’s a lot of information in there. Let’s save some of that data to a variable called venues. Specifically, follow this nesting chain from the jsonResponse variable to get an array of venue data
// console.log(venues);  //There should be an array with the number of objects you selected in the limit parameter. You’ll only want the venue property inside of these objects. Use .map() to save these venues to the venues array from the previous step.
venues = venues.map(item => item.venue);
//console.log(venues);
//console.log(venues);
return venues; //it return an array

  }

}catch(error){
  console.log(error);
}

}

//this is chalenging task
const getVenuePhoto = async(venue) =>{
    const urlToFetch = `https://api.foursquare.com/v2/venues/${venue.id}/photos?VENUE_ID=${venue.id}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200716`;
    
    try{
        const response = await fetch(urlToFetch);
        if (response.ok)
        {
          const jsonResponse = await response.json();
          const photoURL = jsonResponse.response.photos.items[0].prefix + '100x100' + jsonResponse.response.photos.items[0].suffix
          //console.log(photoURL);
          return photoURL;
        }
}catch(error) {
    console.log(error);
}
}

const getForecast = async () => {
const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`; //urlToFetch will includes: the base weatherUrl, the q parameter (representing the location query) with a value of the user’s input ($input.val()) , and your API key as the APPID parameter , Don’t forget to join parameter key-value pairs after the API key with &.
try {
  const response = await fetch(urlToFetch);
  if (response.ok) {
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    return jsonResponse;
  }
}catch(error){
    console.log(error);
}
}


// Render functions
const renderVenues = (venues) => {
 $venueDivs.forEach(($venue, index) => { //calls the .forEach() method on the $venueDivs array. This is an array of the <div>s in index.html where you will render the information returned in the response from the Foursquare API.
    // Add your code here:
    const venue = venues[index]; //venue to represent the individual venue object in the  "venues" array
    //console.log (venue);
    const photoSrc = getVenuePhoto(venue);
    //console.log(photoSrc);

    const venueIcon = venue.categories[0].icon; //save the value of the object representing the venue icon. This is accessible as the icon property of the first element in the array of categories of the venue object.
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`; //Now, construct the full source URL for the venue icon. The venueIcon has a prefix and suffix field used to construct a source path. You can inspect more information about the icon object in the Response Fields and sample Response in the Foursquare documentation or log venueIcon to the console to inspect it.   Concatenate or combine the prefix property of venueIcon, the string 'bg_64', and the suffix, and save to a const venueImgSrc. 'bg_64' is required to fetch icons with a gray background that will show up against the background of the Wanderlust page.
    let venueContent = createVenueHTML(venue.name, photoSrc, venue.categories[0].name ,venue.location, venueImgSrc); //HTML string to render correct venue information.  createVenueHTML() has been provided to construct the HTML string to display the venue information.

    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => { 
  // Add your code here:
  	let weatherContent = createWeatherHTML(day); //createWeatherHTML() has been provided to construct the HTML string to display the weather information. You can examine it in public/helpers.js,
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues)); //Now it’s time to hook up your renderVenues() function to the data fetched by getVenues().
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)