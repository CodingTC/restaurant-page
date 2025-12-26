import pizzaImage from "./images/pizza.jpg";

export function loadHome()
{
    const mainContent = document.querySelector("#content");

    const mainImage = document.createElement("img");
    const mainHeadline = document.createElement("h2");
    const mainPara = document.createElement("p");

    mainHeadline.innerText = "Tc's Restaurant";
    mainPara.innerText = "This is the greatest restaurant to ever exist";
    mainImage.src = pizzaImage;

    mainContent.appendChild(mainHeadline);
    mainContent.appendChild(mainImage);
    mainContent.appendChild(mainPara);
}
