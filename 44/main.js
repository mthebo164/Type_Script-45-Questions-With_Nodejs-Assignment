// Creating A Function With ("Rest Parameter") (...) That Accept Arguments Which Rerpesent Sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making A Sandwich With The Following Items :\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy Your Sandwich \n");
}
// Calling A Function 3 Times With 3 Different Types of Arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Tomato", "Egg", "Bread", "Lettuce");
makeSandwich("Bread", "Jam");
makeSandwich("Bread", "Chicken", "Cheese", "Egg");
