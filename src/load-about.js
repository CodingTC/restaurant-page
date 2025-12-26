export function loadAbout()
{
    const mainContent = document.querySelector("#content");

    mainContent.innerHTML = "";

    const aboutDiv = document.createElement("div");

    const contactHeader = document.createElement("h1");
    contactHeader.classList.add("about-h1");
    contactHeader.innerText = "Contact Us";    
    
    aboutDiv.appendChild(contactHeader);
    mainContent.appendChild(aboutDiv);
}
