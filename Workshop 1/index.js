// If, else if, else:
// 1.
// Checking Age for Different Ticket Prices 
// - Child ticket: $5 (below 12 years)
// - Teen ticket: $7" (below 18 years)
// - Adult ticket: $8" (between 18 and 60)
// - Senior ticket $10 (over 60 years)

let age = 1;

if (age <= 0) {
    console.log("Please insert a valid number for age");
} else if (age > 0 && age < 12) {
    console.log("Child Ticket price 5$");
} else if (age < 18) {
    console.log("Teen Ticket price 7$");
} else if (age >= 18 && age <= 60) {
    console.log("Adult Ticket price 8$");
} else {
    console.log("Senior Ticket price 10$");
}