//Practice 2.1 More function Fun
/*
function sayHello(name,age) {
    // console.log(`Hello ${name} you are ${age}years old!`);
    return `Hello ${name} you are ${age}years old!`;
}

const greetLee = sayHello("Lee", 29)

console.log(greetLee)
const calculator = {
    plus: function (a,b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    mul: function (a,b) {
        return a * b;
    },
    div: function (a,b) {
        return a / b;
    },
    remain: function (a,b) {
        return a % b;
    },
    power: function (a,b) {
        return a**b;
    }
 }

const plus = calculator.plus(5, 5)
const minus = calculator.minus(15, 5)
const multi = calculator.mul(2, 5)
const divider = calculator.div(20, 2)
const power = calculator.power(3, 2)

console.log(plus)
console.log(minus)
console.log(multi)
console.log(divider)
console.log(power)
*/

//Practice 2.2 JS DOM Functions, 2.3 Modifying the DOM with JS
/*
const title = document.querySelector("#title");

title.innerHTML = "Hi! from JS"
title.style.color = 'red'
document.title = "I own you now"
*/

//Practice 2.4 Events and event handlers
/*
const title = document.querySelector('#title');

function handleResize(event) {
    console.log(event);
    // console.log("I have been resized")
}

function handleClick() {
    title.style.color = "blue";
}

// window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
*/

//Practice 2.6 DOM - if else - Function Practice
/*
const title = document.querySelector('#title');

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d"; 

function handelClick() {
    const currentColor = title.style.color;
    // console.log(currentColor);
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handelClick);
}

init();
*/

//Practice 2.7 DOM - if else - Function Practice Two
const title = document.querySelector('#title');

const CLICKED_CLASS = "clicked";

function handleClick() {
    /* Toggle로 더욱 간단하게
    const hasClass = title.classList.contains(CLICKED_CLASS);
    // console.log(currentClass);
    if(!hasClass) {
        title.classList.add(CLICKED_CLASS);
    }else {
        title.classList.remove(CLICKED_CLASS);
    }
    */
   //Using Toggle
   title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
