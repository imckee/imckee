// #Question A:

// You can append an item to array by either using the push() method, concat() method, splice() method or unshift() method.

// push() method:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.push("Kiwi");
  document.getElementById("demo").innerHTML = fruits;
}

// conact() method:

function myFunction() {
  var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var children = hege.concat(stale); 
  document.getElementById("demo").innerHTML = children;
}

// splice() method:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");
  document.getElementById("demo").innerHTML = fruits;
}

// unshift() method:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.unshift("Lemon", "Pineapple");
  document.getElementById("demo").innerHTML = fruits;
}

// #Question B:

// Find the index of the array element you want to reove using indexOf(), and then remove that index with splice():

const array = [2, 7, 12];

console.log(array);

const index = array.indexOf(7);
	if (index>-1) {
		array.splice(index, 1);
	}

console.log(array);





