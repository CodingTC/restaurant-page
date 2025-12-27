export function loadAbout()
{
    const mainContent = document.querySelector("#content");

    mainContent.innerHTML = "";

    const aboutDiv = document.createElement("div");

    const contactHeader = document.createElement("h1");
    contactHeader.classList.add("about-h1");
    contactHeader.innerText = "Contact Us";    


    const container =  document.createElement("div");
    const itemHeader = document.createElement("h3");
    const itemParaPosition = document.createElement("p");
    const itemParaPhone = document.createElement("p");
    const itemParaEmail = document.createElement("p");

    container.classList.add("card");
    container.classList.add("card-flex");

    itemHeader.innerText = "TC's Info";
    itemParaPosition.innerText = "Owner";
    itemParaPhone.innerText = "123-456-6789";
    itemParaEmail.innerText = "perfectlyRealEmail@notFake.com";

    itemHeader.style.marginLeft = ".7em";
    itemHeader.style.marginBottom = "1.5rem";
    itemParaPosition.style.marginLeft = "4rem";
    itemParaPosition.style.marginBottom = ".75rem";
    itemParaPhone.style.marginLeft = "4rem";
    itemParaPhone.style.marginBottom = ".75rem";
    itemParaEmail.style.marginLeft = "4rem";
    itemParaEmail.style.marginBottom = ".75rem";

    container.append(itemHeader, itemParaPosition, itemParaPhone, itemParaEmail);

    
    aboutDiv.appendChild(contactHeader);
    mainContent.appendChild(aboutDiv);
    mainContent.appendChild(container);
}
