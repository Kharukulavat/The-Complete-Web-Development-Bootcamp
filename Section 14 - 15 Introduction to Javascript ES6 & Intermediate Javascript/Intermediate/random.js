//Random Number Generation in Javascript: Building 
function LoveCalculator() {
    myName = prompt("What is your name?")
    crush = prompt("What is your crush's name?")
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    alert("Your love score is " + loveScore + "%")
    }
    
    LoveCalculator();