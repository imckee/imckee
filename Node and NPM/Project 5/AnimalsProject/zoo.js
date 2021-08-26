var animals = require('animals');
 
var Log = require('log.pets');
console.log(animals());

// //=> fox
 
var Log = require('log.pets');
Log.lion();
// console.log(animals())
// Log.zoo('animals()','animals()','animals()');

var Log = require('log.pets');

Log.zoo(animals(), animals(), animals());

console.log(animals().length);

