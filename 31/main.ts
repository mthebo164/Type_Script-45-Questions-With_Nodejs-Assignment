let userNames = ["Admin", "Taha", "Rauf", "Ahmed", "Huzaifa"]

userNames = []

if (userNames.length === 0){
    console.log ("Your array is empty we need to find some users.")
}else {
    //Using ForEach Loop In Array
    userNames.forEach (oneUser =>{
        if (oneUser === "Admin"){
            console.log (`Hello ${oneUser}, Would you like to see a status report?`)
        }else {
            console.log (`Hello ${oneUser}, Thank you for logging in again.`)
        }
    })
}