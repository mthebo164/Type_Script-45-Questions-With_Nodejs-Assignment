// Define Variables
var alienColour = "Green";
// Using If and Else-If statement
if (alienColour) {
    console.log("(Statement 1) You shot down a green alien and earned 5 points.");
}
else if (alienColour === "Yellow") {
    console.log("you shot down a yellow alien and earned 10 points.");
}
else if (alienColour === "Red") {
    console.log("you shot a red alien and earned 15 points");
}
// statement 2
var alienColour2 = "Yellow";
if (alienColour2 === "green") {
    console.log("You shot down a green alien and earned 5 points.");
}
else if (alienColour2 === "Yellow") {
    console.log("(Statement 2) You shot down a yellow alien and earned 10 points.");
}
else if (alienColour2 === "Red") {
    console.log("You shot down a red alien and earned 15 points.");
}
// Statement 3
var alienColour3 = "Red";
if (alienColour3 === "green") {
    console.log("you shot down a green alien and earned 5 points.");
}
else if (alienColour3 === "yellow") {
    console.log("you shot down a yellow alien and earned 10 points.");
}
else if (alienColour3 === "Red") {
    console.log("(Statement 3) you shot down a red alien and earned 15 points.");
}
