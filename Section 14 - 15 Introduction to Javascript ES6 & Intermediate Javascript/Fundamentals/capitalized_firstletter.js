//Challenge: Capitalizing the First Letter

//1 Create a var that stores the name that user enters via prompt.

var name = prompt("What is your name?");

//2 Capitalize the first letter of their name.

//a Isolate the first char
var firstChar = name.slice(0,1);

//b Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the rest of the name and change it to lowercase
var restOfName = name.slice(1, name.length).toLowerCase();

//d change the rest of name to lowercase
// restOfName = restOfName.toLowerCase;

//e concatenate the first char with the rest of the char
var capitalisedName = upperCaseFirstChar + restOfName;

//3 We use the Capitalized version of their name to greet them using an alert

alert("Hello, " + capitalisedName);