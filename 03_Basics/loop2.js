//for of loop

const name = "Apeksha Sumant Rai";

let size = 0

for(let i of name){
    console.log(i);
    size ++;  
}
console.log(size);



//For in loop

const student = {
    name : "Apeksha More",
    age : 20,
    gender: "female",
    bfName: "Sumant Rai"
}

for(let i in student){
    console.log(i,":",student[i]);
    
}