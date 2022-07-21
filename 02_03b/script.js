/**
 * Store dark mode user preference in localstorage.
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
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

mainContent.innerHTML = Cardlist(newData);

/**
 * Light/dark mode feature.
 */
const docElement = document.documentElement;
const toggle = document.querySelector(".toggle");

// Detect mode on load and set toggle state accordingly.
const displayModeOnLoad = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    docElement.classList.add("dark");
    toggle.setAttribute("aria-pressed", "true");
  } else {
    docElement.classList.add("light");
    toggle.removeAttribute("aria-pressed");
  }
};
displayModeOnLoad();

// Trigger mode change with toggle.
const toggleDisplayMode = () => {
  if (toggle.getAttribute("aria-pressed") === "true") {
    toggle.removeAttribute("aria-pressed");
  } else {
    toggle.setAttribute("aria-pressed", "true");
  }

  docElement.classList.toggle("dark");
  docElement.classList.toggle("light");
};
toggle.addEventListener("click", () => toggleDisplayMode());
