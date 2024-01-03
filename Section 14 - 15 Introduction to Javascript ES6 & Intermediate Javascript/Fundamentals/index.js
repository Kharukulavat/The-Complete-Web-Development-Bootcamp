//Data Types
2 + 3
5

alert(2+3)
undefined

typeof(23)
'number'

typeof("Nipun")
'string'

typeof(true)
'boolean'


//Javascript Variables
var myName = "Nipun";
alert(myName);

var myName = "Nipun";
var yourName = prompt("What is your name?");
alert("My name is " + myName + ",welcome to my course " + yourName + "!")

var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert("Your level is currently: " + gameLevel)


// String Lengths and Retrieving the Number of Characters
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.")


//Slicing and Extracting Parts of a String
var name = "Nipun";
name.slice(0,1); //slice out of this string from position 0 up to but not include 1 -> "N"
name.slice(4,5) //slice at position 4-> "n"
name.slice(0,3) // -> "Nip"

//Challenge: Using the slice() method, console.log the results of the following:
var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140)

// or we can simplify it
alert("Compose your tweet:").slice(0,140)


//Slicing and Extracting Parts of a String
var name = "Nipun";
name = name.toUpperCase();  // Changes all characters to uppercase
name = name.toLowerCase();  // Changes all characters to lowercase

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


//Basic Arithmetic and the Modulo Operator in Javascript
var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;

alert("Your dog is " + humanAge + " years old in human years.")


//Increment and Decrement Expressions
// Increment Operator
let x = 5;
x++; // x is now 6

// Decrement Operator
x--; // x is now 5 again

// Compound Assignment Operator
x += 2; // x is now 7
let y = 1;
x += y; // x is now 8

