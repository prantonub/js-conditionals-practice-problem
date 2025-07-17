// Write a simple JavaScript program that takes an employee's performance score and returns 
// the bonus amount based on the following scale:

// 90–100: 20% bonus
// 80–89: 15% bonus
// 70–79: 10% bonus
// 60–69: 5% bonus
// Below 60: No bonus
let performanceScore = 75; // Change this value to test
let salary = 30000; // Base salary
let bonus = 0;

if (performanceScore >= 90 && performanceScore <= 100) {
    bonus = salary * 0.20;
} else if (performanceScore >= 80 && performanceScore <= 89) {
    bonus = salary * 0.15;
} else if (performanceScore >= 70 && performanceScore <= 79) {
    bonus = salary * 0.10;
} else if (performanceScore >= 60 && performanceScore <= 69) {
    bonus = salary * 0.05;
} else if (performanceScore >= 0 && performanceScore < 60) {
    bonus = 0;
} else {
    console.log("Invalid performance score");
}

console.log("Bonus Amount: " + bonus + " tk");
