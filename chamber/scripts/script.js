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

const dropdownBtn = document.querySelector(".close-btn");
const nav = document.querySelector("header nav ul");

dropdownBtn.addEventListener("click", () => {
    if(nav.style.display == "") {
        nav.style.display = "flex";
    }
    else if(nav.style.display == "flex") {
        nav.style.display = "";
    }
})