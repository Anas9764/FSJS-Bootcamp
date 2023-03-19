let Score = prompt("Enter your score here to check the grade.")

if (Score >= 80){
    if (Score > 100){
        console.log(`${Score}, score above 100 is invalid.`)
    }
    else{
        console.log(`Your grade on ${Score} is A`)
    } 
} else if (Score >= 70 && Score <= 79){
    console.log(`Your grade on ${Score} is B`)
} else if (Score >= 60 && Score <= 69){
    console.log(`Your grade on ${Score} is C`)
} else if (Score >= 50 && Score <= 59){
    console.log(`Your grade on ${Score} is D`)
} else if (Score >= 0 && Score <= 49){
    console.log(`Your grade on ${Score} is E`)
}

// input : 78
// output
// Your grade on 78 is B