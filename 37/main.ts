// Making a Function

function make_shirt (size : string = "Large" , printMessage : string = "I Love TypeScript"){
console.log (`Creating a ${size} size shirt with the ${printMessage} message prints on shirt.`)

}

// Calling a Function By-Default Values

make_shirt ();

// Calling a Function Now With Medium Size And Default Values

make_shirt ("Medium");

// Calling a Function Now With Small Size And Different Print Message

make_shirt ("Small" , "I Love JavaScript");