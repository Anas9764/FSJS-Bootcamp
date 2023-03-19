let userInput = prompt("Enter your age to check your driving eligibility.")

if (userInput < 18){
    x = 18 - userInput;
    console.log(`Hey! You're not old enough to drive. Wait for ${x} years.`)
}else{
    console.log("You're old enough to drive. Celebrate it!")
}


// input : 15
// output:
// Hey! You're not old enough to drive. Wait for 3 years.

// input : 20
// output:
// You're old enough to drive. Celebrate it!
