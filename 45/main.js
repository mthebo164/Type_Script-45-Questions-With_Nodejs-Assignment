// Creating A Function with ("Rest Parameters") To Define Car Object With Optional Options
function create_car(manufacturer, model) {
    // Initializing The Car Objet With Manufacturer And Model Options
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Addind Additional Options To The car Object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Calling A Function To Create A Car Object
var my_car = create_car("Toyota", "Corolla", "Color : Black", "Variant : Altis 1.8", "Year : 2024", "Price : 90 Lacs");
var my_car_1 = create_car("Honda", "Civic", "Color : Black", "Variant : RS Turbo", "Year : 2024", "Price : 1 Crore");
// Printing The Variable To Ensure All The Information Is Stored Correctely In The Car Object
console.log(my_car);
console.log(my_car_1);
