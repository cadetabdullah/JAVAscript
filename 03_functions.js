function addTwoNumbers(num1,num2){
    return num1+num2;
}
// console.log(addTwoNumbers(5,4));


function inCart(...num1){     //to add the unlimited objects as parameter we use ...n
    return num1;
}
// console.log(inCart(100,200,300,400,500));


//you can also pass array or objects in the function

function objectExample(myObject){
   console.log(`Your name is ${myObject.userName} and your total is ${myObject.price}.`)
}

// objectExample({
//     userName: "Abullah",
//     price: 499
// })


function arrayExample(...num1){

    
    return num1;
    // return num1[1];
}
console.log(arrayExample(1,2,3,4,5,6))




// Write a function to revers a number 

function toReverseNumber(num){

    num=num+"";
    return num.split("").reverse().join("") //first .split to split the string and treat like a list the .reverse to reverse it the .join to again joinn the list to string
}

// console.log(Number(toReverseNumber(345678)));


// write a program to tell fortune

function tellFortune(jobTitle, place, partner, num, deathDate){
    var future = `you will be a ${jobTitle}. you will visit ${place}. you will be married to ${partner} and may have ${num} kids. you will die in ${deathDate}`;
    return future;
}
// console.log(tellFortune("CEO of your Company", "USA", "Mandela", 2, 2075));


// write a program to calculate the age of a puppy

function calculatePuppyAge(age){
    console.log(`The age of your puppy in dog age is ${7*age}`)
}
// calculatePuppyAge(7)


