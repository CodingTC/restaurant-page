import "./styles.css";
import { loadHome } from "./initial-page-load.js";
import { loadMenu } from "./menu-load.js";
import { loadAbout } from "./load-about.js";

console.log("Hello World!");
loadHome();

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
aboutButton.addEventListener("click", loadAbout);
