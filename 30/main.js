// Creating Array
var userNames = ["Admin", "Taha", "Rauf", "Ahmed", "Huzaifa"];
// Using ForEach Loop In Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for Logging In Again."));
    }
});
