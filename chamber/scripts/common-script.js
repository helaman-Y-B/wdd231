/**
 * Script to update the current year and last modified date on the webpage.
 */
const date = new Date();
const year = date.getFullYear();

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;

/**
 * This script is responsable to show or hide the navigation menu.
 */

const sideBar = document.querySelector("#menu-toggle");
const nav = document.querySelector("nav");

const closeBtn = document.querySelector(".close-btn")

// When screen sizes changes, then if the width is bigger or equal to 526px, removes the inline style from nav.
window.addEventListener("resize", () => {
    if(window.innerWidth >= 526) {
        nav.setAttribute("class", "is-open")
    }
})

// Opens the navigation bar
sideBar.addEventListener("click", () => {
    
    nav.setAttribute("class", "is-open")
    
})

//Closes the navigation bar
closeBtn.addEventListener("click", () => {
    
    nav.setAttribute("class", "is-closed")
    
})
