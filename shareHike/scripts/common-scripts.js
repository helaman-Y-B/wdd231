/**
 * Script to update the current year and last modified date on the webpage.
 */
const date = new Date();
const year = date.getFullYear();

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;

/**
 * Script reponsible to open and close the navigation bar.
 */

const navArrowOpen = document.querySelector("#open-nav-btn");
const nav = document.querySelector("nav");

// Creates the first eventListener and then calls the closeNav function to create the close eventListener.
// After that an infinite loop of adding events listeners is created.
navArrowOpen.addEventListener("click", () => {
    
    navArrowOpen.setAttribute("id", "close-nav-btn");
    nav.setAttribute("id", "open-nav");

    closeNav()
    
})

// Creates the eventListener of opening the navigation
function openNav() {
    const navArrowOpen = document.querySelector("#open-nav-btn");
    navArrowOpen.addEventListener("click", () => {
    
        navArrowOpen.setAttribute("id", "close-nav-btn");
        nav.setAttribute("id", "open-nav");

        closeNav()
    
    })
}

// Creates the eventListener of closing the navigation
function closeNav() {
    const navArrowClose = document.querySelector("#close-nav-btn")

    navArrowClose.addEventListener("click", () => {
    
        navArrowClose.setAttribute("id", "open-nav-btn");
        nav.setAttribute("id", "close-nav");

        openNav()
    })
}

