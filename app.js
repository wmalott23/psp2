// 1. create a function that receives an integer
// 2. use a for loop to add each digit in that number to a variable
// 3. square that variable
// 4. check if is equal to 1
// 5. append value to a list of prevous values and add one to the counter
// 6. repeat until variable value is equal to 1 or is equal to any of the previous values
// 7. if it is equal to 1, print out that the number is "counter" happy

// function happyNumbers(){
//     let ogInput = prompt("Please enter a number you think may be happy");
//     let happyInput = ogInput;
//     let happyCount = 0;
//     let happyCounter = 0;
//     let prevIterations = [];
//     let loopCount = 0;
//     while(loopCount == 0 && happyCounter < 50){
//         for(let i = 0; i < happyInput.length; i++){
//             happyCount = happyCount + happyInput[i] * happyInput[i];}
//         if(happyCount == 1) loopCount = 1;
//         else if(prevIterations.includes(happyCount)) loopCount = 2;
//         else {happyCounter += 1; prevIterations.push(happyCount)}
//         happyInput = happyCount.toString();
//         happyCount = 0;
//     }
//     if(loopCount == 1) console.log(`${ogInput} is ${happyCounter} happy!`);
//     else if(loopCount == 2) console.log(`${ogInput} is not happy :(`);
//     else console.log("An error has occured");
// }

// let runHappy = happyNumbers();

// I cheated on the last one by turning the variable into a string but I couldn't find a way to keep the variable a number and pull a specific digit :(
// I thought about using a modulus and just stepping up the remainder by 10 until the value was the same as the remainder, but that seemed like too much

// 1. create a function that prompts for a value
// 2. use a for loop to find out if every number between 1 and the input divides without a remainder
// 3. in for loop, append each value that divides evenly into a list
// 4. if the list length is bigger than 2, the number is not a prime number
// 5. insert this function inside another function that iterates through all numbers between 1 and a given input and inserts it into the prime number function
// 6. This function will append any numbers deemed prime into another list
// 7. print out the list

// function findPrime(number){
//     let primeList = [];
//     for(let i = 1; i<=number; i++){
//         if(number%i == 0) primeList.push(i);
//     }
//     if(primeList.length >2) return 0;
//     else return 1;
// }

// function findAllPrimes(){
//     let bigNum = prompt("Please enter a number that you would like to find all prime numbers less than it but greater than 1");
//     let choice = Number(bigNum);
//     let allList = [];
//     for(let i=1; i<=choice; i++){
//         let each = findPrime(i);
//         if(each == 1 && i != 1) allList.push(i);
//     }
//     console.log(allList);
// }

// let runPrimes = findAllPrimes()

// First try bb!