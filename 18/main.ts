// Making A Array Of Countries And Print Its Original Order
let countriesTovisit : string [] = ["Usa", "Uk", "Canada", "Austraila", "Japan", "Spain","Portugal", "France", "Italy", "Germany", "Saudi Arabia", "Qatar","Lebanon", "Oman", "South Africa"];
console.log("Original Order:", countriesTovisit);

//Printing The Array In Alphabatical Order Without Modifying The Actual Array List
console.log ("Alphabatical Order:", [...countriesTovisit]. sort());

// Showing Array Is Still In Its Original Order
console.log("Still in Original Order:", countriesTovisit);

// Printing The Array In Reverse Order Without Modifying The Actual Array List
console.log("Reverse Order:", [...countriesTovisit]. reverse());

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