let userHeight = prompt("Enter your height(in cm)")
let userWeight = prompt("Enter your weight(in kg)")

function calculateBMI (height, weight){
    let bmi = (weight/(height*height/10000))
    if (bmi < 18.5){
        console.log("Your are underweight according to BMI Index.");
    }else if(bmi >= 18.5 && bmi <= 24.9){
        console.log("Your weight is normal according to BMI Index.");
    }else if(bmi >= 25 && bmi <= 29.9){
        console.log("Your are overweight according to BMI Index.");
    }else if(bmi > 30){
        console.log("Your are obese according to BMI Index.");
    }
}

calculateBMI(userHeight, userWeight);