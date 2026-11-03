
//1. 
// function getExcited(str) {
//     return str + "!!!";
// }
// console.log(getExcited("Hello"));


//2.
// let getExcited = function(str) {
//     return str = "!!!"
// }
// console.log(getExcited("Hello"));

// 2.5. Function as "variable"
// let getExcited = function(str) {return str + "!!!"};
// console.log(getExcited("Hello"));

//3. Arrow function
// let getExcited = (str) => {return str = "!!!"}
// console.log(getExcited("Hello"))

//3.5. Minimized arrow function. One parameter, and only a return value.
// let getExcited = str => str + "!!!";
// console.log(getExcited("Hello"))




let rootDiv = document.querySelector("body");
let button = document.createElement("button");
button.innerHTML = "Click";
rootDiv.append(button);

//1.
// function clicked() {
//     console.log("CLICKED")
// }
// 2.5
// let clicked = function() {console.log("CLICKED")}
// button.addEventListener("click", clicked);

//3. Anonymous function
// button.addEventListener("click", function() {console.log("CLICKED")});
// 3. Anonymous arrow function
// button.addEventListener("click", (event)=>{console.log('CLICKED')})
//3.5 Minimized arrow function (one argument. one line of code)
//button.addEventListener("click", e => console.log("CLICKED"))

//Multiple arguments
// button.addEventListener("click", e => {
//     //This is the code body of the event handler
//     let rand = Math.floor(Math.random() * 5)
//     button.innerHTML = rand
// })



let numbers = [10, 4, 6, 7, 3, -1];
console.log(numbers)

// numbers.sort((a, b) => {
//     if (a)
// })



// Map. reutrns a new array.
// let doubledNumbers = numbers.map(element => element * 2);
// console.log(doubledNumbers)


// for...of...
// for (let number of numbers) {
//     console.log(number);
// }
//4. Array function
// numbers.forEach(element => console.log(element));
