// Creating A Function To Print Each Magician Name From An Array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Creating A Array Containing Magician Names
var magician_names = ["Harry Potter", "Hermoine", "Voldermort", "Dumbeldor"];
// Calling A Function To Print Each Magician Names
var great_magicians = make_great(magician_names);
show_magician(great_magicians);
