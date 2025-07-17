/*
Mobile Shop Offer:

- If mobile price > 50,000tk: Free Earbuds
- If mobile price between 30,000tk–50,000tk: Earbuds 1,000tk
- If mobile price < 30,000tk: No offer
*/

const mobilePrice = 45000;

if (mobilePrice > 50000) {
    console.log("Free Earbuds");
} else if (mobilePrice >= 30000 && mobilePrice <= 50000) {
    console.log("Buy Earbuds for 1000tk");
} else {
    console.log("No offer available");
}
