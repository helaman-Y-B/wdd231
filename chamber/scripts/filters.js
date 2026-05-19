const gridBtn = document.getElementById("grid-filter");

const listBtn = document.getElementById("list-filter");

gridBtn.addEventListener("click", () => {
    gridBtn.setAttribute("id", "grid-filter selected");
    listBtn.setAttribute("id", "list-filter");
    displayGrid();
});

listBtn.addEventListener("click", () => {
    gridBtn.setAttribute("id", "grid-filter");
    listBtn.setAttribute("id", "list-filter selected");
    displayList();
});


/**
 * A function to change the class name of the members div elements to grid-display.
 */
function displayGrid() {
    const members = document.querySelectorAll(".members");

    members.forEach(member => {
        member.setAttribute("class", "members grid-display");
    });
};

/**
 * A function to change the class name of the members div elements to list-display.
 */
function displayList() {
    const members = document.querySelectorAll(".members");

    members.forEach(member => {
        member.setAttribute("class", "members list-display");
    });
};