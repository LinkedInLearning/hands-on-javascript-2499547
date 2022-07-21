import data from "./data.js";
import Card from "./components/Card.js";

const mainContent = document.querySelector(".main-content");

mainContent.innerHTML = Card(data);
