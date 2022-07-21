/**
 * Lazy-load data on scroll.
 * Use IntersectionObserver to detect when the cardlist appears.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * - https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
 */

import data from "./data.js";
import Cardlist from "./components/Cardlist.js";

// Add license info to each data object.
const license = {
  license: "Unsplash License",
  license_uri: "https://unsplash.com/license",
};
const newData = data.map((imgData) => {
  const newImgData = { ...imgData, ...license };
  return newImgData;
});

const mainContent = document.querySelector(".main-content");
const loadButton = document.querySelector("#load");
const loader = document.querySelector(".loader");

loadButton.addEventListener("click", () => {
  loader.classList.toggle("hidden");
  loadButton.classList.toggle("hidden");
  setTimeout(() => {
    mainContent.innerHTML = Cardlist(newData);
  }, 3000);
});

/**
 * Light/dark mode feature.
 */
const docElement = document.documentElement;
const toggle = document.querySelector(".toggle");

// Detect mode on load and set toggle state accordingly.
const displayModeOnLoad = () => {
  console.log(localStorage.getItem("darkMode"));
  let dark = false;
  // Set dark to true if prefers-color-scheme is set to dark.
  dark = !!(
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  console.log(dark);
  // Set dark to true of localStorage "darkMode" is set to enabled.
  dark = localStorage.getItem("darkMode") === "enabled";
  console.log(dark);

  if (dark) {
    docElement.classList.add("dark");
    toggle.setAttribute("aria-pressed", "true");
    localStorage.setItem("darkMode", "enabled");
  } else {
    docElement.classList.add("light");
    toggle.removeAttribute("aria-pressed");
    localStorage.setItem("darkMode", "disabled");
  }
};
displayModeOnLoad();

// Trigger mode change with toggle.
const toggleDisplayMode = () => {
  if (toggle.getAttribute("aria-pressed") === "true") {
    toggle.removeAttribute("aria-pressed");
    localStorage.setItem("darkMode", "disabled");
  } else {
    toggle.setAttribute("aria-pressed", "true");
    localStorage.setItem("darkMode", "enabled");
  }

  docElement.classList.toggle("dark");
  docElement.classList.toggle("light");
};
toggle.addEventListener("click", () => toggleDisplayMode());
