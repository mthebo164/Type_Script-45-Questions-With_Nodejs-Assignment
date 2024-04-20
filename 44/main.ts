// Creating A Function With ("Rest Parameter") (...) That Accept Arguments Which Rerpesent Sandwich

function makeSandwich (...items : string []){
    
    console.log ("\n Making A Sandwich With The Following Items :\n");
    
    items.forEach (singleItem => console.log (singleItem));
    
    console.log ("\n Now Enjoy Your Sandwich \n");

}

// Calling A Function 3 Times With 3 Different Types of Arguments

makeSandwich  ("Chicken" , "Cheese" , "Mayo" , "Tomato" , "Egg" , "Bread" , "Lettuce");

makeSandwich ("Bread" , "Jam");

makeSandwich ("Bread" , "Chicken" , "Cheese" , "Egg");