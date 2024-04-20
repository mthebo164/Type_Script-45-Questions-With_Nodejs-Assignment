// Creating A Function To Print Each Magician Name From An Array

function show_magician (magician : string []){
    magician.forEach (name => console.log (name));
    }
    
    // Creating A Function To Print a Message The Great Through ("Map") Function To Modify Array

    function make_great (magician : string []){
    return magician.map (name => `The Great ${name}`);

    }
    
    // Creating A Array Containing Magician Names
    
    let magician_names = ["Harry Potter" , "Hermoine" , "Voldermort", "Dumbeldor"];
    
    // Calling A Function To Print Each Magician Names And Modify Magician Names
    
 let great_magicians  = make_great (magician_names);


// Calling A Function With Modified Magician Names

 show_magician (great_magicians);