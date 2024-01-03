//Coding Exercise 7: The Fibonacci Exercise
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var output = [];
        for (var count = 1; count <= n; count ++) {
            if (count === 1) {
                output.push(0); //output = [0]
            }
            else if (count === 2) {
                output.push(1); //out[ut = [0,1]
            } 
            else {
                if (output.length === n) {
                    return output;
                } else {
                    output.push(output[output.length - 2] + output[output.length - 1]);
                }
            }
        }

        //Return an array of fibonacci numbers starting from 0.
      return output;  
    //Do NOT change any of the code below 👇
    }
    fibonacciGenerator();
    