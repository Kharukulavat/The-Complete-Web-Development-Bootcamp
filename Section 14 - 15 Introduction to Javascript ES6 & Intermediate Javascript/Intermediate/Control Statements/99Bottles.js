
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// function song99Bottles(){
//     var bottles = 99;
//     while(bottles>0){
//         console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down and pass it around, " + --bottles + " bottles of beer on the wall.");
//     }   
// }

// song99Bottles();