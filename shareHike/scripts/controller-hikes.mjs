import { displayHikes, displayHighToLow } from "./show-hikes.mjs";

const highToLowBtn = document.querySelector("#highToLow")

highToLowBtn.addEventListener("click", () => {
    displayHighToLow();
})

displayHikes();