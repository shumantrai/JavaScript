// for(let i = 0; i <= 100; i++){
//    if(i % 2 === 0){
//     console.log(`${i} is a Even number`);
    
//    }
    
// }

let gameNum = 25

let userNum = prompt("Guess the game number: ");

while (gameNum != userNum) {
    userNum = prompt("you entered wrong number, guess again: ");
    
}
console.log("Congts, You entered the right number: ");
