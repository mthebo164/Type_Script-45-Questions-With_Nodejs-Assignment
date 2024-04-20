// Array of Current Users

let current_users = ["ahmed", "Shady", "Billo", "Usman", "Abban"]

// Arrau of New Users

let new_users = ["Taha", "Atif", "Ahmed", "Rauf", "Usman"]

// Loop Through New-Users To Check For Username Availablity

new_users.forEach (new_one_user =>{
   
// Making A Condition For Username Already ExistAndSave In Our_Condition Variable
    
    let our_condition = current_users.some (current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print Different Messages Using If-Else Statement

    if (our_condition){
        console.log (`Sorry ${new_one_user}, is already taken!`)

    }else {
        console.log (`This Username ${new_one_user}, is available`)
    }
})
