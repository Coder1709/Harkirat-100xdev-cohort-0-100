//passing function 
function sum (a,b , print) {
    let ans = a + b;
    print(ans);
}
function display(data) {
    console.log(data);
}

const ans = sum(10,20,display);


//doin another to get a better understanding

function multi (a,b ,print) {
    let result = a* b ;

    print(result);
}

function display(data) {
    console.log(data);
}

const result = multi(10,20,display);
//SET TIMEOUT
//In JavaScript, the setTimeout function is used to delay the execution of a function or the evaluation of a code snippet. Here's the basic syntax:

function sayHello() 
{
    console.log("Hello, World!");
}
  
  // Set a timeout to execute the sayHello function after 2000 milliseconds (2 seconds)
setTimeout(sayHello, 2000);

//second example
function greet(name, greeting) {
    console.log(`${greeting}, ${name}!`);
  }
  
  // Set a timeout to execute the greet function after 1000 milliseconds (1 second) with parameters
  setTimeout(greet, 1000, "John", "Good morning");
  