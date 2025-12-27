import pizzaImage from "./images/pizza.jpg";

export function loadHome()
{
    const mainContent = document.querySelector("#content");

    mainContent.innerHTML = "";

    const homeDiv = document.createElement("div");
    const mainHeadline = document.createElement("h2");

    const restaurantDescDiv = document.createElement("div");
    const restaurantDesc = document.createElement("p");
    const initials = document.createElement("h3");

    restaurantDesc.innerText = "TC’s has the best drinks and comfort food! The atmosphere and service make you feel like you’re hanging out with friends, grabbing a cold drink and digging into classic American favorites. This is exactly the kind of place I like to come back to again and again.";
    initials.innerText = "- A Reviewer";
    
    initials.style.marginLeft = "1.5em";

    restaurantDesc.style.marginBottom = "1em"

    restaurantDescDiv.classList.add("card");
    restaurantDescDiv.classList.add("card-flex");

    restaurantDescDiv.appendChild(restaurantDesc);
    restaurantDescDiv.appendChild(initials);


    const hours = [
      "Sunday: 11am – 10pm",
      "Monday: 11am – 10pm",
      "Tuesday: 11am – 10pm",
      "Wednesday: 11am – 10pm",
      "Thursday: 11am – 12am",
      "Friday: 11am – 1am",
      "Saturday: 11am – 1am"
    ];


    const hoursCard = document.createElement("div");

    hoursCard.classList.add("card");
    hoursCard.classList.add("card-flex");

    const hoursHeader = document.createElement("h3");
    const hoursPara = document.createElement("p");

    hoursHeader.innerText = "Hours";
    hoursPara.innerHTML = hours.join("<br>");
    hoursPara.style.textAlign = "center";
    hoursPara.style.lineHeight = "1.7";
    hoursHeader.style.marginLeft = "1.5em";

    hoursCard.appendChild(hoursHeader);
    hoursCard.appendChild(hoursPara);


    const locationCard = document.createElement("div");

    locationCard.classList.add("card");
    locationCard.classList.add("card-flex");

    const locationHeader = document.createElement("h3");
    const locationPara = document.createElement("p");
    
    locationHeader.innerText = "Location";
    locationPara.innerText = "123 Capital Dr, Tallahassee, Florida";

    locationPara.style.textAlign = "center";
    locationHeader.style.marginLeft = "1.5em";

    locationCard.appendChild(locationHeader);
    locationCard.appendChild(locationPara);

    homeDiv.classList.add("main-content"); 

    mainHeadline.innerText = "TC’s Bar & Grill";

    homeDiv.appendChild(mainHeadline);
    homeDiv.appendChild(restaurantDescDiv);
    homeDiv.appendChild(hoursCard);
    homeDiv.appendChild(locationCard);

    mainContent.appendChild(homeDiv);
}
