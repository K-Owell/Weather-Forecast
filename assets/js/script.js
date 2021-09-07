// Variable list
var cityChoice = document.getElementById("submit")


// API thing with key
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={e936b921fafb6dce7a3efcf77c750e6c}



// Save city input and translate location into coordinates 

function cityInput() {
    fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}' + cityInput + '&appid={e936b921fafb6dce7a3efcf77c750e6c}'
    )
}























// Listens for Clicky Clicks


cityChoice.addEventListener("click", cityInput);