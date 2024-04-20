var guestlist = ["Shady", "Billo", "Daniyal", "Taha"];
var dontCome = guestlist[3];
console.log(dontCome, "nhi aah skta");
guestlist.splice(3, 3, "Rauf");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would U Like To Dinner With Me ?")); });
