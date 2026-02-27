var a = 10;
var b =20;

let result = (a == b);
let result1 = (a >= b);
let resul2 = (a <= b);

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

const obj = {
    "name" : "Atharva",
    "class" : "aiml-1"
}
// for( key in obj){
//     console.log(key)
// }
for( let x in obj){
    console.log(obj[x]) // gets the value of the key
    // console.log(obj.x) // undefined 
}
// for( key in obj){
//     console.log(key)
// }

// for(const [key, value] of Object.entries(obj)){
//     console.log(`${key} : ${value}`)
// }

let grade = 'A';
switch(grade){
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good"); 
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Invalid grade");
}


function add(a, b){
    return a + b;
}
let sum = add(5, 10);
console.log(sum);

function showAlert(){
    alert("Button clicked!");
}

function sayHello(name, age){
    alert(`Hello ${name}, you are ${age} years old!`);
}

var res = mul(5, 10);
function mul(a, b){
    return a * b;
}
console.log(res);