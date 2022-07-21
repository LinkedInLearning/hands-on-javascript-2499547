/**
 * Create a component to display weather data.
 * - Build a new component in a ./components folder
 * - Migrate the HTML output from index.html to the new component.
 * - Modify the fetch query to call the component.
 */

import settings from "../settings.js";

const tempField = document.querySelector(".getTemp");
const windSpeed = document.querySelector(".getWSpeed");
const windDir = document.querySelector(".getWDir");

const displayData = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=burnaby,ca&APPID=${settings.appid}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      tempField.innerHTML = data.main.temp;
      windSpeed.innerHTML = data.wind.speed;
      windDir.innerHTML = data.wind.deg;
    });
};

displayData();
