import pizzaImage from "./images/pizza.jpg";

export function loadHome()
{
    const mainContent = document.querySelector("#content");

    mainContent.innerHTML = "";

    const mainImage = document.createElement("img");
    const mainHeadline = document.createElement("h2");
    const mainPara = document.createElement("p");
    const homeDiv = document.createElement("div");

    homeDiv.classList.add("main-content"); 

    mainHeadline.innerText = "Tc's Restaurant";
    mainPara.innerText = "This is the greatest restaurant to ever exist";
    mainImage.src = pizzaImage;

    homeDiv.appendChild(mainHeadline);
    homeDiv.appendChild(mainImage);
    homeDiv.appendChild(mainPara);

    mainContent.appendChild(homeDiv);
}
