/**
 * Build a button to change units.
 * - Get the default unit type from settings.js.
 * - Create data for imperial and metric units.
 * - Create a button for switching between imperial and metric units.
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
    `https://api.openweathermap.org/data/2.5/weather?lat=49.2194636514848&lon=-122.96519638087379&APPID=${settings.appid}`,
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
