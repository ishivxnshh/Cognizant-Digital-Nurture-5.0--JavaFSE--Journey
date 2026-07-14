// Event list
const events = [
    {
        name: "Sports Day",
        category: "Sports",
        date: "20 July 2026"
    },
    {
        name: "Music Night",
        category: "Music",
        date: "25 July 2026"
    },
    {
        name: "Workshop",
        category: "Education",
        date: "30 July 2026"
    }
];

// Function with default parameter
function displayEvent(eventName = "Community Event") {
    return eventName;
}

function showEvents() {

    // Clone array using spread operator
    const eventList = [...events];

    let output = "<h2>Event Details</h2>";

    eventList.forEach(event => {

        // Destructuring
        const { name, category, date } = event;

        output += `
            <p>
                <strong>Name:</strong> ${displayEvent(name)} <br>
                <strong>Category:</strong> ${category} <br>
                <strong>Date:</strong> ${date}
            </p>
            <hr>
        `;
    });

    document.getElementById("output").innerHTML = output;
}