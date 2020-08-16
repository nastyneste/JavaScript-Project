window.alert("Hello, world!");
document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br> \"Eat my shorts!\" Bart responded.");

document.write(3 + 3);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine",
	Daughter = "Penny", Son = "Zorro";
document.write(Dad);

function My_First_Function() {		//Defining a function and naming it
	var str = "This text is green!"; 	//Defining a variable and giving it a 
										//string value
	var result = str.fontcolor("green"); //Using the fontcolor method on
										 //str variable
	document.getElementById("Green_Text").innerHTML = result;	//Putting the value	
										 //of result into HTML element with "Green_Text" id
}

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function myFunction() {
	var sentence = "I am learning";
	sentence += " a lot from this book!";
	document.getElementById("Concatenate").innerHTML = sentence;
}
