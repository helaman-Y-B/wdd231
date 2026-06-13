import { displayHikes, displayHighToLow, displayLowToHigh, displayByCategory } from "./show-hikes.mjs";

const highToLowBtn = document.querySelector("#highToLow");

highToLowBtn.addEventListener("click", () => {
    displayHighToLow();
})

const lowToHighBtn = document.querySelector("#lowToHigh");

lowToHighBtn.addEventListener("click", () => {
    displayLowToHigh();
})

// Event Listener Setup
document.addEventListener("DOMContentLoaded", () => {
    // Show all hikes by default when the page loads
    displayByCategory("All");

    const category = document.querySelector("#filterCategory");

    // Listen for changes on the category radio buttons
    category.addEventListener("change", (event) => {
        // Ensure the change came from our category radio group
        if (event.target.name === "categoryFilter") {
            const selectedCategory = event.target.value;
            displayByCategory(selectedCategory);
        }
    });
});

displayHikes();