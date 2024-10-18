// Immediately Invoked Function Expression

// Two paraenthesis used for IIFE first for function defination and second for functin execution like (funtion defination paraenthesis)(excetution paraenthesis)

(function exampleOne(){
    console.log("Welcome to the Website");
    
})();

// for second iife in the same program you have to use ; after the execution paraenthesis.

((name)=> {                            //this function is called arrow function
    console.log(`Welcome to our second Wesite ${name}`);
    
})("Homeapplianceexpert.com");