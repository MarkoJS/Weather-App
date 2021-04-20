var input = document.getElementById("location");
var search = document.getElementById("btn");
var temperature = document.getElementById("temperature");
var city = document.getElementById("city");
var maxT = document.getElementById("maxT");
var minT = document.getElementById("minT");
var weather = document.getElementById("weather");
var clouds = document.getElementById("clouds");
var inputVal='';
var icon = null;
const apiKey = '955e0f1137cb5f91e47c4858339a19ea';

search.addEventListener("click", function(){
    inputVal=input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('test',data);
        temperature.innerHTML = data.main.temp + "°C";
        city.innerHTML = data.name + ", " + data.sys.country;
        maxT.innerHTML = "Max.temperature: " + data.main.temp_max + "°C";
        minT.innerHTML = "Min.temperature: " + data.main.temp_min + "°C";
        weather.innerHTML = data.weather[0].main;
        icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`;
        clouds.src=icon;
    });
})

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});
