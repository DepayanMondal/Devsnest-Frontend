let tickets = document.getElementsByClassName("box");
const totalTickets = tickets.length;

for (const ticket of tickets) {
  ticket.addEventListener("click", (e) => {
    let booked = e.target.classList.toggle("bookedBox");

    const bookedTickets = document.getElementById("booked");
    const remainingTickets = document.getElementById("remaining");

    const noBookedTickets = document.getElementsByClassName("bookedBox").length;
    const noRemainingTickets = totalTickets - noBookedTickets;

    bookedTickets.innerText = noBookedTickets;
    remainingTickets.innerText = noRemainingTickets;
  });
}