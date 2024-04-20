// Array of Current Users
var current_users = ["ahmed", "Shady", "Billo", "Usman", "Abban"];
// Arrau of New Users
var new_users = ["Taha", "Atif", "Ahmed", "Rauf", "Usman"];
// Loop Through New-Users To Check For Username Availablity
new_users.forEach(function (new_one_user) {
    // Making A Condition For Username Already ExistAndSave In Our_Condition Variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different Messages Using If-Else Statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, ", is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, ", is available"));
    }
});
