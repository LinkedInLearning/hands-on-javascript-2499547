/**
 * Nesting components:
 * - Create a new cardlist component.
 * - Iterate through all available images in `data.js`.
 * - Output a card for each available image.
 */

import data from "./data.js";
import CardList from "./components/cardList.js";

const mainContent = document.querySelector(".main-content");

mainContent.innerHTML = CardList(data);
