import beerImage from "./images/beer.jpg";
import cocktailImage from "./images/cocktail.jpg";
import frenchFriesImage from "./images/fries.jpg";
import onionRingsImage from "./images/onionrings.jpg";
import cheeseBurgerImage from "./images/cheeseBurger.jpg";
import doubleSmashBurgerImage from "./images/doubleSmashBurger.jpg";
import pepperoniPizzaImage from "./images/pizza.jpg";
import bbqChickenPizzaImage from "./images/bbqChickenPizza.jpg";
import loadedFriesImage from "./images/loadedfries.jpg";
import signatureBurgerImage from "./images/signatureBurger.jpg";

export function loadMenu()
{

    function createMenuItem({menuItem, desc, price, image})
    {
        const container =  document.createElement("div");
        const itemHeader = document.createElement("h3");
        const itemPara = document.createElement("p");
        const itemPrice = document.createElement("h4");
        const itemImg = document.createElement("img");

        container.classList.add("card");
        container.classList.add("card-flex");

        itemHeader.innerText = menuItem;
        itemPara.innerText = desc;
        itemPrice.innerText = price;
        itemImg.src = image;
        itemImg.alt = menuItem;

        itemHeader.style.marginLeft = ".7em";
        itemHeader.style.marginBottom = "1.5rem";
        itemPara.style.marginLeft = "4rem";
        itemPara.style.marginBottom = ".75rem";
        itemPara.style.lineHeight = "1.7";
        itemPrice.style.marginLeft = "4rem";

        container.append(itemHeader, itemPara, itemPrice, itemImg);
        return container;
    }

    const mainContent = document.querySelector("#content");

    mainContent.innerHTML = "";

    const menuDiv = document.createElement("div"); 
    menuDiv.style.textAlign = "center";


    const menuHeader = document.createElement("h2");
    menuHeader.innerText = "Menu";

    menuHeader.style.marginBottom = "1.5em";
    
    const bevHeader = document.createElement("h3");
    bevHeader.innerText = "Beverages";
    bevHeader.classList.add("menu-h3");

    const beerDesc = "A rotating selection of ice-cold domestic and craft beers, always poured fresh and served right.";

    const draftBeerDiv = createMenuItem({
        menuItem: "Draft Beer", 
        desc: beerDesc, 
        price: "$5", 
        image: beerImage
    });


    const cocktailDesc = "Our signature mixed drink made with premium spirits and simple flavors that go down easy.";

    const cocktailDiv = createMenuItem({
        menuItem: "House Cocktail",
        desc: cocktailDesc,
        price: "$7",
        image: cocktailImage
    });


    const foodSidesHeader = document.createElement("h3");
    foodSidesHeader.innerText = "Sides";
    foodSidesHeader.classList.add("menu-h3");

    foodSidesHeader.style.marginTop = "10rem";

    const frenchFriesDesc = "Golden, crispy fries seasoned just right. Add cheese or bacon for $1 extra."

    const frenchFriesDiv = createMenuItem({
        menuItem: "French Fries",
        desc: frenchFriesDesc,
        price: "$3",
        image: frenchFriesImage
    });

    const onionRingsDesc = "Thick-cut onion rings battered and fried until perfectly crunchy.";

    const onionRingsDiv = createMenuItem({
        menuItem: "Onion Rings",
        desc: onionRingsDesc,
        price: "$4",
        image: onionRingsImage
    });

    const mainDishes = document.createElement("h3");
    mainDishes.innerText = "Main Dishes";
    mainDishes.classList.add("menu-h3");

    const cheeseBurgerDesc = "A juicy beef patty topped with melted cheese, lettuce, tomato, and our house sauce.";

    const cheeseBurgerDiv = createMenuItem({
        menuItem: "Classic Cheeseburger",
        desc: cheeseBurgerDesc,
        price: "$9",
        image: cheeseBurgerImage
    });


    const doubleSmashBurgerDesc = "Two smashed beef patties, extra cheese, and all the good stuff stacked high.";

    const doubleSmashBurgerDiv = createMenuItem({
        menuItem: "Double Smash Burger",
        desc: doubleSmashBurgerDesc,
        price: "$12",
        image: doubleSmashBurgerImage
    });


    const pepperoniPizzaDesc = "A personal-size pizza topped with classic pepperoni and melted mozzarella.";

    const pepperoniPizzaDiv = createMenuItem({
        menuItem : "Pepperoni Pizza",
        desc: pepperoniPizzaDesc,
        price: "$10",
        image: pepperoniPizzaImage
    });


    const bbqChickenPizzaDesc = "Grilled chicken, tangy BBQ sauce, red onions, and cheese baked to perfection.";

    const bbqChickenPizzaDiv = createMenuItem({
        menuItem: "BBQ Chicken Pizza",
        desc: bbqChickenPizzaDesc,
        price: "$11",
        image: bbqChickenPizzaImage
    });


    const loadedFriesDesc = "A big basket of fries loaded with cheese, bacon, and green onions.";

    const loadedFriesDiv = createMenuItem({
        menuItem: "Loaded Fries",
        desc: loadedFriesDesc,
        price: "$8",
        image: loadedFriesImage
    });


    const signatureBurgerDesc = "Our house specialty - seasoned beef, melted cheese, crispy toppings, and bold flavor in every bite.";

    const signatureBurgerDiv = createMenuItem({
        menuItem: "TC's Signature Burger",
        desc: signatureBurgerDesc,
        price: "$13",
        image: signatureBurgerImage
    });

    signatureBurgerDiv.style.marginBottom = "5rem";

    mainDishes.style.marginTop = "10rem";

    menuDiv.appendChild(menuHeader);

    menuDiv.appendChild(bevHeader);
    menuDiv.appendChild(draftBeerDiv);
    menuDiv.appendChild(cocktailDiv);

    menuDiv.appendChild(foodSidesHeader);
    menuDiv.appendChild(frenchFriesDiv);
    menuDiv.appendChild(onionRingsDiv);

    menuDiv.appendChild(mainDishes);
    menuDiv.appendChild(cheeseBurgerDiv);
    menuDiv.appendChild(doubleSmashBurgerDiv);
    menuDiv.appendChild(pepperoniPizzaDiv);
    menuDiv.appendChild(bbqChickenPizzaDiv);
    menuDiv.appendChild(loadedFriesDiv);
    menuDiv.appendChild(signatureBurgerDiv);

    mainContent.appendChild(menuDiv);
}
