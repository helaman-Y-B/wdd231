import { displayHikes, displayHighToLow, displayLowToHigh } from "./show-hikes.mjs";

const highToLowBtn = document.querySelector("#highToLow");

highToLowBtn.addEventListener("click", () => {
    displayHighToLow();
})

const lowToHighBtn = document.querySelector("#lowToHigh");

lowToHighBtn.addEventListener("click", () => {
    displayLowToHigh();
})

displayHikes();