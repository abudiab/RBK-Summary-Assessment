//Create HTML, CSS & JS files and connect them together
//Add Two text input fields, one with a placeholder input, and another with color
//Add a button below them and an empty unordered list below the button
//Create 3 CSS classes (red, yellow, blue)
//Create a javascript function that adds an item list to the unordered list
//If the color value is red, yellow or blue
//Add the CSS class to the item accordingly
//Do not add a list item if the color value is non of the colors

//DO NOT USE JQUERY

function addItem() {
	var item = document.getElementByName("itemInput");
	var color = document.getElementByName("colorInput");
	var button = document.getElementById("button1");
	var unorderedList = document.getElementById("ul1")
	var newLi = document.createTextNode(item)

	newLi.class = color;
	unorderedList.appendChild(newLi)



}



