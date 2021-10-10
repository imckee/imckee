var marvel = require('marvel-characters')
 
// // // random character
console.log(marvel());

console.log(marvel.characters.length);
console.log(marvel.characters.filter(name => name.startsWith('Man')));

// var doesItExist = marvel.indexOf('Iron Man');
// console.log(doesItExist);

// find characters that start with "Man"
console.log(marvel.characters.filter(name => name.startsWith('Iron Man')));
console.log(marvel.characters.filter(name => name.startsWith('Batman')));


// let myArray = ['Iron Man'];

// console.log(myArray);

// console.log(marvel.characters.indexOf('Batman'));


