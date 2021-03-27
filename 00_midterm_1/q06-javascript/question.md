### Question 6:

Write a Javascript loop that will iterate from 1 to 5, both included, and log if the number is odd or even.

Now put this code into a function that takes appropriate inputs as arguments (e.g. 1, 5) and returns an object like the following.

    {
      1: "odd",
      2: "even",
      3: "odd",
      4: "even",
      5: "odd"
    }


### Your answer may be provided as a code file with single function within it.  Explanation not required. Comments not required for grading.

for (var x=1; x<=5; x++){
    if (x === 1) {
        console.log(x + " odd");
    }
    else if (x % 2 === 0) {
        console.log(x + " even");
    }
    else {
        console.log(x + " odd");
    }
}
