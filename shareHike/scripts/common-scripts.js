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

// Creates the first eventListener
navArrowOpen.addEventListener("click", () => {
    
    nav.classList.toggle("open");
    navArrowOpen.classList.toggle("open-btn");
    
})

