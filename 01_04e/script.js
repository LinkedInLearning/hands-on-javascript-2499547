import data from "./data.js";
import Cardlist from "./components/Cardlist.js";

const mainContent = document.querySelector(".main-content");

mainContent.innerHTML = Cardlist(data);
