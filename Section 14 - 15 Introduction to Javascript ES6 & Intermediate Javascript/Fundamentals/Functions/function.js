//Function Part1: Creating and Calling Functions


//Challenge - The Karel Robot
function getMilk() {
    // Instructions for the robot to get milk
    console.log("Leave house");
    console.log("Move right 2 steps");
    console.log("Move up 4 steps");
    console.log("Move right 2 steps");
    console.log("Buy milk at the store");
    console.log("Move left 4 steps");
    console.log("Move down 2 steps");
    console.log("Enter house");
}

//Challenge 1: Moving to the Top Right Corner
function moveFourTimes() {
    move();
    move();
    move();
    move();
}

moveFourTimes();
turnLeft();
moveFourTimes();

//Challenge 2: Diagonal Line of Beepers
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main() {
    // your code here
    diagonalBeepers();
 }
 function diagonalBeepers() {
    while (noBeepersPresent()) {
       putBeeper();
       move();
       turnLeft();
       move();
       turnRight();
 
    }
 }

 //or 

 function diagonalMoveAndBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}

diagonalMoveAndBeeper();
diagonalMoveAndBeeper();
diagonalMoveAndBeeper();
diagonalMoveAndBeeper();
diagonalMoveAndBeeper();


//Optional Challenge: Chessboard Pattern
function moveToNextRow() {
    turnLeft();
    move();
    turnLeft();
    move();
    turnRight();
}

function createChessboardPattern() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            putBeeper();
            move();
        }
        moveToNextRow();
    }
}

createChessboardPattern();

//or 
function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
 }
  
 function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
 }
  
 function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
 }
  
 function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
 }
  
 function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }

//Functions Part 2: Parameters and Arguments
function getMilk(bottles) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("buy " + bottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  getMilk(5)

  function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
      
    var numberOfBottles = Math.floor(money/1.5);
      
      console.log("buy " + numberOfBottles + " bottles of milk");
      
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  getMilk(200)

  //Functions Part 3: Outputs & Return Values

  function getMilk(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
          
    console.log("buy " + calcBottles(money, 2.5) + " bottles of milk");
      
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  
      return calcChange(money, costPerBottle) //Remainder of the division
      
  }
  
  function calcBottles(StartingMoney, costPerBottle) {
      var numberOfBottles = Math.floor(startingMoney / costPerBottle);
      return numberOfBottles;
  }
  
  function calcChange(startingAmount, costPerBottle) {
      var change = startingAmount % costPerBottle;
      return change;
  }
  
  console.log("Hello master, here is your " + getMilk(5, 1.5) + " change.");


  