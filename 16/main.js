// Creating A Guest List Array
var guestlist = ["Taha", "Billo", "Shady", "Daniyal"];
// Making Variables For Those Guests Who Can't Come
var dontCome = guestlist[0];
// Printing The Name Of A Guest Who Can't Come
console.log(dontCome, "NHi Aa Skta");
// Adding & Removing Values From Guest List Array
guestlist.splice(0, 1, "Rauf");
// Printing Message for Bigger Table
console.log("Good News ! I Have Found A Bigger Table For Our Dinner.");
// Adding A New Guest At Starting Index Of Guest List Array
guestlist.unshift("Ali");
// Adding A New Guest At Ending Index Of Guest List Array
guestlist.push("Faiq");
// Geting A Middle Index Of Guest List Array
var middleIndex = Math.floor(guestlist.length / 2);
// Adding A New Guest At Middle Index Of Guest List Array
guestlist.splice(middleIndex, 0, "Huzair");
// Printing Message Of Updated Guest List
console.log("Updated List Of My Guests");
// Sending A Invitiation Message To My Guests One By One With Their Names
guestlist.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, ", Would U Like To Have Dinner With Me ?")); });
