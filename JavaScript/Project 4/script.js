var imageArray = ["assets/background1.jpg", "assets/background2.jpg", "assets/background3.jpg"];
var index = 0;

function rotateImage(){
	document.querySelector("img").setAttribute("src", imageArray[index]);
	index++;
	if (index >= imageArray.length) {
		index = 0;
	}
}

setInterval(rotateImage, 3000);