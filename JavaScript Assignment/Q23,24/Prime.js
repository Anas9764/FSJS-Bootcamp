var userInputNumber = parseInt(prompt("Enter the number to check it is a prime number or not."))
var numberPrime = true

function checkPrimeNumber(userInputNumber){
    if (userInputNumber < 2){
        console.log("Please enter the number greater than 1");
    } else if (userInputNumber === 2){
        console.log(`${userInputNumber} is a prime number`);
    } else {
        for ( let factor = 2; factor <= Math.ceil(Math.sqrt(userInputNumber)); factor++ ){
            if (userInputNumber % factor == 0){
                numberPrime = false;
                break
            } 
        }
        if (numberPrime){
            console.log(`${userInputNumber} is a prime number.`);
        } else {
            console.log(`${userInputNumber} is not a prime number.`);
        }
    }
}

checkPrimeNumber(userInputNumber);

// input:22
// output:
// 22 is not a prime number.

// input:17
// output:
// 17 is a prime number.

//  A program to create two array "even" and "odd" having even and odd number
//  between the 0 to 100 (0 and 100 included).

var evenArray = [];
for (var i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        evenArray.push(i)
    }
}
console.log(evenArray)

var oddArray = [];
for (var i = 1; i <= 100; i++) {
    if(i % 2 != 0){
        oddArray.push(i)
    }
}
console.log(oddArray)


// output

// (50) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]

// (50) [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]