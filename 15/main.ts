// Printing Guest List In A Array
let guestlist = ["Shady", "Billo", "Daniyal", "Taha"];

// Guest At Number 3 Not Comming
let dontCome = guestlist[3];

// Printing A Message Guest Is Not Coming
console.log(dontCome, "nhi aah skta");

// Swaping Guest Fom Another Guest
guestlist.splice(3, 3, "Rauf");

// Printing A Message To Invite Each Guest To Dinner
guestlist.forEach(guest => console.log(`Salam ${guest}, Would U Like To Dinner With Me ?`));