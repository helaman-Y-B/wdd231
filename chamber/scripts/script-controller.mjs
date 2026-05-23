import { displayIndexData, displayForeCast } from "./get-data.mjs"

displayIndexData();

// The script was being executed before the DOM was loaded, because the function is async.
document.addEventListener("DOMContentLoaded", () => {
    displayForeCast();
});

