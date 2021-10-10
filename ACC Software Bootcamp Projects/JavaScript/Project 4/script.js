var bgPic = ["assets/background1.jpg", "assets/background2.jpg", "assets/background3.jpg"];

var newImage;

var COUNTER = 1;

var myImage;

 function imageFunction() { //function called when page loads
     myImage = setInterval(bgRotate, 3000); //calls bgRotation every 3 seconds
 } //closes function


function bgRotate() { //function called from setInterval
    newImage = "url('" + bgPic[COUNTER] + "')"; //sets variable to appropriate background image based on counter
    document.getElementById("picRotation").style.backgroundImage = newImage; //displays new background image
    COUNTER ++; //adds 1 to counter
    if (COUNTER == bgPic.length) { //tests to see if counter has reached greater than number of elements in array
                                    //this allows for only one change needed in actual array if more backgrounds are wanted
        return COUNTER = 0; // resets counter so that it starts over with first element of array
    } //closes function

 }//closes bgRotate function

