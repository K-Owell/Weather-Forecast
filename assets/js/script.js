// Variable list
var cityChoice = document.getElementById("submit");
var userText = document.getElementById("userText");
var AppId = 'e936b921fafb6dce7a3efcf77c750e6c'
// API thing with key
// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}



// Save city input 

function cityInput() {

    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + userText.value + '&appid=' + AppId
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        console.log(response.weather[0].description)
    })
    .catch(function(error) {
        // find error code
    })
}


// Listens for Clicky Clicks


cityChoice.addEventListener("click", cityInput);