/*
Tea Shop Offer System:

- If Tea price > 100tk: Free Biscuit
- If Tea price is between 50tk and 100tk: Biscuit 10tk
- If Tea price < 50tk: No offer
*/

const teaPrice = 75;

if (teaPrice > 100) {
    console.log("Free Biscuit");
} else if (teaPrice >= 50 && teaPrice <= 100) {
    console.log("Buy Biscuit 10tk");
} else {
    console.log("No offer available");
}
