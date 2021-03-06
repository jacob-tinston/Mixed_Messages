// Mixed Messages Project - Weather Forecast

let element = document.getElementById('message')
let button = document.getElementById('button')

button.addEventListener('click', function(){
// Arrays of all the different scenarios.
const dates = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weather = ['rainy', 'snowy', 'windy', 'sunny'];
const rainPrep = ['Be sure to wear wellies!', 'Be sure to wear a raincoat!', 'Be sure to take an umbrella!', 'Drive safe!'];
const snowPrep = ['Be sure to wear gloves!', 'Be sure to wear a hat!', 'Best not to drive in this weather!', 'Have lots of fun in the snow!'];
const windPrep = ['Be careful when driving!', 'Be sure to wrap up!', 'Try to stay inside, if possible,', 'Hold on tightly to your things!'];
const sunPrep = ['Be sure to wear shorts!', 'Don\'t forget your suncream!', 'Great day for the beach!', 'A coat won\t be needed today!'];

// Sets variables for all the end message components.
const randDate = dates[Math.floor(Math.random() * dates.length)];
const randWeather = weather[Math.floor(Math.random() * weather.length)];
let randWeatherMsg = '';

//Adds time specific greeting as timeOfDay
let date = new Date();
let hours = date.getHours();
let timeOfDay;
if (hours >= 0 && hours <= 12){
    timeOfDay = "morning"
}
else if (hours > 12 && hours <= 14){
    timeOfDay = "afternoon"
}
else if (hours > 6 && hours <= 23){
    timeOfDay = "evening"
}

// Assigns a value to randWeatherMessage and return string with all the components added.
function weatherMessage(name) {
    if (randWeather === 'rainy') {
        randWeatherMsg = rainPrep[Math.floor(Math.random() * rainPrep.length)];
    } else if (randWeather === 'snowy') {
        randWeatherMsg = snowPrep[Math.floor(Math.random() * snowPrep.length)];
    } else if (randWeather === 'windy') {
        randWeatherMsg = windPrep[Math.floor(Math.random() * windPrep.length)];
    } else {
        randWeatherMsg = sunPrep[Math.floor(Math.random() * sunPrep.length)];
    };
    return `Good ${timeOfDay}, ${name}! The date is ${randDate} and the weather for today is predicted to be ${randWeather}. ${randWeatherMsg}`;
 }

 element.innerHTML = weatherMessage('friend')

})

