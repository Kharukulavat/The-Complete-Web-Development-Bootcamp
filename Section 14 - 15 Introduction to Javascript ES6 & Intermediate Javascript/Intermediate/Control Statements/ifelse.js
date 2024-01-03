//Using If-Else Conditionals & Logic
function LoveCalculator() {
    myName = prompt("What is your name?")
    crush = prompt("What is your crush's name?")
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
  
    if (loveScore > 70){
      alert("Your love score is " + loveScore + "%" + "You love each other like Kanye loves Kanye.");
    } else {
      alert("Your love score is " + loveScore + "%");
    }
  
    }
    LoveCalculator();

    //Combining Comparators
    function LoveCalculator() {
        myName = prompt("What is your name?")
        crush = prompt("What is your crush's name?")
        var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1;
      
        if (loveScore > 70){
          alert("Your love score is " + loveScore + "%" + "You love each other like Kanye loves Kanye.");
        } else {
          alert("Your love score is " + loveScore + "%");
        }
      
        if (loveScore > 30 && loveScore <= 70){
          alert("Your love score is " + loveScore + "%");
        }
      
        if (loveScore <= 30){
          alert("Your love score is " + loveScore + "%" + "You go together like oil and water.");
        }
        
        }
        LoveCalculator();