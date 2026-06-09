export default function visitedDate() {
    const now = new Date();

    const savedDate = localStorage.getItem("visitedDate");

    let text = "";

    if (savedDate === null) {
        // First visit
        localStorage.setItem("visitedDate", now.toISOString());
        text = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisit = new Date(savedDate);

        const daysNotVisited = calculateLastVisited(lastVisit, now);

        text = sendText(daysNotVisited);

        // Update last visit to current time
        localStorage.setItem("visitedDate", now.toISOString());
    }

    localStorage.setItem("welcomeText", text);
}

function calculateLastVisited(lastVisit, currentDate) {
    const diffTime = currentDate - lastVisit;

    const daysNotVisited = Math.floor(
        diffTime / (1000 * 60 * 60 * 24)
    );

    return daysNotVisited;
}

function sendText(daysNotVisited) {
    if (daysNotVisited <= 1) {
        return "Back so soon! Awesome!";
    } else {
        return `You last visited ${daysNotVisited} days ago.`;
    }
}
  
