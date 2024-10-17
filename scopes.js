// {} these braces are the scope of a function, an object and if else structures. let and const variablea can't bs use outside the scope 

function practice(){
    let username = "Abdullah"
    console.log(username)

}
// practice()
// console.log(username);      You cannot use this because username is only for functin scope not for outside the function

// you can also use the varable in their child function scope
function childFunctionPractice(){
    let userName= "Abdullah Rajput"
    console.log(userName)
    function childfunction(){
        let email = "abcd@gmail.com"
        console.log(`th username is ${userName}. and the Email is ${email}`) //you can use like this because this is inside the scope
    }
    childfunction()
    // console.log(email); but not like this
}
// childFunctionPractice()

// Same you can do in if else structure


if (true){
    let userName= "Abdullah"
    console.log(userName);
    if (true){
        let email= "Abdcd@gmail.com"
        console.log(`the username is ${userName}. the email is ${email}`);
        
    }
}
