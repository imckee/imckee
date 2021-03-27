### I'd like to empty the array below. Please provide any 3 methods with examples and explain in brief, how to empty the provided array.

var myArray = [1, 2, 3, 4, 5] // it may have any number of elements

Hints:

- Method 1: overwrite the array with empty array (shown below, don't use this as your answer)
- Method 2: by the length property method
- Method 3: using the splice Array method
- Method 4: by popping each member of the array in a loop.
- Method 5: anything you come up with

### Sample Answer:

            myArray = []    // will replace the original myArray with an empty array

### Answer:

-Method 2: By using the length property, I used the following code:

`myArray.length = 0;`  By making the length property = 0, this emptied the array.

-Method 3: `myArray.splice("");` Using the spice method, I chose not to select any of the numbers, instead just using "" in parentheses.  After entering this code, it emptied the array.

-Method 4: by popping each member of the array in a loop, I used the following code:

`myArray.pop(5);
myArray.pop(4);
myArray.pop(3);
myArray.pop(2);
myArray.pop(1);`

The pop() method removes the last element of an array, and then returns that element.  After entering the pop method 5 times, it emptied the array.



