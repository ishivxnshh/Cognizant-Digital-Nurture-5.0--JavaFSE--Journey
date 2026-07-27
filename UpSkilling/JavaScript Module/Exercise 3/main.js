// Event List
const events = [
    { name: "Sports Day", upcoming: true, seats: 20 },
    { name: "Music Festival", upcoming: false, seats: 30 },
    { name: "Workshop", upcoming: true, seats: 0 },
    { name: "Tree Plantation", upcoming: true, seats: 15 }
];

// Display valid events
function showEvents() {

    let result = "<h3>Available Events</h3>";

    events.forEach(function(event) {

        // Check if event is upcoming and seats are available
        if (event.upcoming && event.seats > 0) {

            result += `
                <p>
                    <strong>${event.name}</strong><br>
                    Seats Available: ${event.seats}
                </p>
            `;
        }

    });

    document.getElementById("output").innerHTML = result;
}

// Registration with error handling
function register(eventName) {

    try {

        let event = events.find(e => e.name === eventName);

        if (!event) {
            throw "Event not found.";
        }

        if (event.seats <= 0) {
            throw "No seats available.";
        }

        event.seats--;

        alert("Registration Successful!");

    } catch (error) {

        alert("Error: " + error);

    }

}