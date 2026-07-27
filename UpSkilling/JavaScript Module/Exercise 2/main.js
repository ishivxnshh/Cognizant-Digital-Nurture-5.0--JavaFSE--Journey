// Event details
const eventName = "Community Sports Day";
const eventDate = "20 July 2026";
let availableSeats = 50;

// Display event information using template literals
document.getElementById("output").innerHTML =
`Event Name: ${eventName}<br>
Event Date: ${eventDate}<br>
Available Seats: ${availableSeats}`;

// Function to register a user
function register() {

    if (availableSeats > 0) {

        availableSeats--;   // Decrease seat count

        document.getElementById("output").innerHTML =
        `Event Name: ${eventName}<br>
        Event Date: ${eventDate}<br>
        Available Seats: ${availableSeats}`;

        alert("Registration Successful!");

    } else {

        alert("Sorry! No seats available.");

    }

}