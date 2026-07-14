// Event List
const events = [
    { name: "Sports Day", seats: 20 },
    { name: "Music Night", seats: 15 },
    { name: "Workshop", seats: 10 }
];

// Access container using querySelector()
const container = document.querySelector("#eventContainer");

// Display event cards
events.forEach(event => {

    const card = document.createElement("div");
    card.className = "eventCard";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const seats = document.createElement("p");
    seats.textContent = "Available Seats: " + event.seats;

    const button = document.createElement("button");
    button.textContent = "Register";

    button.onclick = function () {

        if (event.seats > 0) {
            event.seats--;
            seats.textContent = "Available Seats: " + event.seats;
            alert("Registration Successful!");
        } else {
            alert("No seats available.");
        }

    };

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    cancelButton.onclick = function () {

        event.seats++;
        seats.textContent = "Available Seats: " + event.seats;
        alert("Registration Cancelled!");

    };

    card.appendChild(title);
    card.appendChild(seats);
    card.appendChild(button);
    card.appendChild(cancelButton);

    container.appendChild(card);

});