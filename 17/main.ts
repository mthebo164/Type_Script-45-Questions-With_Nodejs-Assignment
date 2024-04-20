// Creating A Guest List Array

let guestlist = ["Taha", "Billo", "Shady", "Daniyal"];

// Making Variables For Those Guests Who Can't Come
let dontCome = guestlist[0];

// Printing The Name Of A Guest Who Can't Come
console.log(dontCome, "NHi Aa Skta");

// Adding & Removing Values From Guest List Array
guestlist.splice(0, 1, "Rauf");

// Printing Message for Bigger Table
console.log("Good News ! I Have Found A Bigger Table For Our Dinner.");

// Adding A New Guest At Starting Index Of Guest List Array
guestlist.unshift("Ali");

// Adding A New Guest At Ending Index Of Guest List Array
guestlist.push("Faiq");

// Geting A Middle Index Of Guest List Array
let middleIndex: number = Math.floor(guestlist.length / 2);

// Adding A New Guest At Middle Index Of Guest List Array
guestlist.splice(middleIndex, 0, "Huzair");

// Printing Message Of Updated Guest List
console.log("Updated List Of My Guests");

// Sending A Invitiation Message To My Guests One By One With Their Names
guestlist.forEach(oneGuest => console.log(`Salam ${oneGuest}, Would U Like To Have Dinner With Me ?`));

// Printing Message That only Two Guests Can Come on Dinner
console.log("unfortunately, the new dinner table won't arrive on time, so I can only invite two guests at dinner with me");

// Using Whiile-Loop To Remove Guests From The Array Until Two Names Remain
while(guestlist.length > 2) {
    let removeGuest= guestlist.pop();
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner`);
}
// Sending A Invitation To The Last Two Guests In The List
console.log("Invitation to the last 2 guests");
guestlist.forEach(lastTwo => console.log (`luckly ${lastTwo}, you are still invited on dinner`));

// Removing Remaining Two Names Of Guests From List
guestlist.pop();
guestlist.pop();

// Checking Empty Guest List
console.log("Empty Guest List:", guestlist);
