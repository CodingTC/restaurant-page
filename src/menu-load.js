export function loadMenu()
{
    const mainContent = document.querySelector("#content");

    mainContent.innerHTML = "";

    const menuDiv = document.createElement("div"); 
    
    const bevHeader = document.createElement("h2");
    bevHeader.innerText = "Beverages";

    const foodSidesHeader = document.createElement("h2");
    foodSidesHeader.innerText = "Sides";

    const mainDishes = document.createElement("h2");
    mainDishes.innerText = "Main Dishes";

    menuDiv.appendChild(bevHeader);
    menuDiv.appendChild(foodSidesHeader);
    menuDiv.appendChild(mainDishes);

    mainContent.appendChild(menuDiv);
}
