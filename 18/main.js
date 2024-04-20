var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making A Array Of Countries And Print Its Original Order
var countriesTovisit = ["Usa", "Uk", "Canada", "Austraila", "Japan", "Spain", "Portugal", "France", "Italy", "Germany", "Saudi Arabia", "Qatar", "Lebanon", "Oman", "South Africa"];
console.log("Original Order:", countriesTovisit);
//Printing The Array In Alphabatical Order Without Modifying The Actual Array List
console.log("Alphabatical Order:", __spreadArray([], countriesTovisit, true).sort());
// Showing Array Is Still In Its Original Order
console.log("Still in Original Order:", countriesTovisit);
// Printing The Array In Reverse Order Without Modifying The Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
// Showing Array Is Still In Its Original Order
console.log("Still in Original Order:", countriesTovisit);
// We Have Changed The Original Array Order Now
console.log("Original Array Reversed:", countriesTovisit.reverse());
// Printing The Array To Show That  Back To Its Original Array Order Now
console.log("reverse Order To Original Order:", countriesTovisit.reverse());
// Printing The Array To Show That Order Has Been Changed To Its Alphabatical Order Now
console.log("Sorted In Alphabatical Order:", countriesTovisit.sort());
// Printing The Array To Show That Again Order Has Been Changed To Its Reversed Order Now
console.log("Original Array Reversed Again:", countriesTovisit.reverse());
