/**
 * Build a location selector.
 * - Capture the location field input.
 * - Send a fetch query to the OpenWeather geocoding API (https://openweathermap.org/api/geocoding-api)
 * - Use the lat and lon data from the geocoding response to fetch weather data.
 */

import settings from "../settings.js";
import weatherCard from "./components/weathercard.js";

const mainContent = document.querySelector(".main-content");
const locationForm = document.querySelector(".locationform");
const formInput = document.querySelector("#location");
let currentLoc = settings.location;
let units = settings.units;
const errorMsg = document.querySelector(".error");

// Caputre location form submit
locationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMsg.classList.add("hidden");
  console.log(formInput.value);
  currentLoc = formInput.value;
  displayData(currentLoc, units);
});

const unitChanger = () => {
  const unitsButton = document.querySelector("#units");
  unitsButton.addEventListener("click", () => {
    units === "metric" ? (units = "imperial") : (units = "metric");
    displayData(units);
  });
};

async function displayData(units) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${currentLoc}&APPID=${settings.appid}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      mainContent.innerHTML = weatherCard(data, units);
    })
    .then(function () {
      unitChanger();
    });
}

displayData(units);
