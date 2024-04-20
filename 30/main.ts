// Creating Array

let userNames = ["Admin", "Taha", "Rauf", "Ahmed", "Huzaifa"];

// Using ForEach Loop In Array

userNames.forEach (oneUser =>{
    if (oneUser === "Admin"){
        console.log (`Hello ${oneUser}, Would you like to see status report?`)
    }else {
        console.log (`Hello ${oneUser}, Thank you for Logging In Again.`)
    }
})