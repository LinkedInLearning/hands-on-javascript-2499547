/**
 * Build a location selector.
 * - Capture the location field input.
 * - Send a fetch query to the OpenWeather geocoding API (https://openweathermap.org/api/geocoding-api)
 * - Use the lat and lon data from the geocoding response to fetch weather data.
 */

import settings from "../settings.js";
import weatherCard from "./components/weathercard.js";

const mainContent = document.querySelector(".main-content");
let units = settings.units;

const unitChanger = () => {
  const unitsButton = document.querySelector("#units");
  unitsButton.addEventListener("click", () => {
    units === "metric" ? (units = "imperial") : (units = "metric");
    displayData(units);
  });
};

async function displayData(units) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=carpinteria,ca,us&APPID=${settings.appid}`,
    {
      method: "GET",
    }
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
