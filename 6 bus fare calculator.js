/**
 * Ticket fare Calculator
 * - Children (age < 10): Free
 * - Students (age < 18): 50% discount
 * - Senior citizens (age >= 60): 15% discount
 * - Others: Regular ticket fare 800 tk
 */

let age = 35; // Change this to test different ages
let ticketFare = 800;

if (age < 10) {
    console.log("Free Entry");
} else if (age < 18) {
    ticketFare = ticketFare * 50 / 100;
    console.log("Student Discount Applied. Ticket fare: " + ticketFare + " tk");
} else if (age >= 60) {
    ticketFare = ticketFare * 85 / 100;
    console.log("Senior Citizen Discount Applied. Ticket fare: " + ticketFare + " tk");
} else {
    console.log("Regular Ticket fare: " + ticketFare + " tk");
}
