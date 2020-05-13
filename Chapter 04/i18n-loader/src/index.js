var locale = require("i18n!./colors.json");
locale(function() {
 console.log(locale.red); // prints red
 console.log(locale.blue); // prints blue
});