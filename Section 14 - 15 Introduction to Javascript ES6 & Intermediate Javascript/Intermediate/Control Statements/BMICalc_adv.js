//Coding Exercise 4:
function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "are underweight.";
    }

    else if(bmi < 24.9) {
        interpretation = "have a normal weight.";
    }

    else {
        interpretation = "are overweight.";
    }

    return "Your BMI is " + bmi + ", so you " + interpretation;
}