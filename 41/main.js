// Creating A Function To Print Each Magician Name From An Array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Creating A Array Containing Magician Names
var magician_names = ["Harry Potter", "Hermoine", "Voldermort", "Dumbeldor"];
// Calling A Function To Print Each Magician Names
show_magician(magician_names);
