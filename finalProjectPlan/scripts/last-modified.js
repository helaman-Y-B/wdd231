/**
 * Script to update the current year and last modified date on the webpage.
 */
const date = new Date();
const year = date.getFullYear();

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;