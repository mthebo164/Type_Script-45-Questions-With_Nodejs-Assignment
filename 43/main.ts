// Creating A Function To Print Each Magician Name From An Array

function show_magician (magician : string []){
    magician.forEach (name => console.log (name));
    }
    
    // Creating A Function To Print a Message The Great Through Map Loop To Modify Array

    function make_great (magician : string []){
    return magician.map (name => `The Great ${name}`);

    }
    
    // Creating A Array Containing Magician Names
    
    let magician_names = ["Harry Potter" , "Hermoine" , "Voldermort", "Dumbeldor"];

    // Making A Function With Copy Of Original Array Through ("Slice") Function

let copy_magician_names = magician_names.slice ();

// Modifying Copied Array To Put "The Great" With Magician Names Message In A New Array

let copy_great_magicians = make_great (copy_magician_names);

// Showing Both Arrays Original And Copied

// Original

console.log ("\n Original Array \n");
show_magician (magician_names);

// Copied
console.log ("\n Copied Array \n");
show_magician (copy_great_magicians);