// alert("Hello"); //  One time pop up on the browser not nodejs

// const num = prompt("Hii, Enter a number")

// if (num % 5 === 0) {
//     console.log(`${num} is multiple of 5`);
      
// }else{
//     console.log(`${num} is not multiple of 5`);
    
// }
//run the code on browser console window

let marks = 41;

if(marks <= 100 && marks >= 80){
    console.log(`${marks} Grade A`);
    
}else if(marks <= 79 && marks >= 70){
    console.log(`${marks} Grade B`);
    
}else if(marks <= 69 && marks >= 60){
    console.log(`${marks} Grade C`);
    
}else if(marks <=59 && marks >= 50){
    console.log(`${marks} Grade D`);
    
}else{
    console.log(`${marks} Fail`);
}