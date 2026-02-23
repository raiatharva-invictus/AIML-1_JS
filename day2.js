var a = 10;
var b =20;

let result = (a == b);
let result1 = (a >= b);
let resul2 = (a <= b);

for(let i = 0; i < 10; i++){
    console.log(i);
}

const obj = {
    "name" : "Atharva",
    "class" : "aiml-1"
}
for( key in obj){
    console.log(key)
}
for( let x in obj){
    console.log(obj[x])
}
for( key in obj){
    console.log(key)
}

for(const [key, value] of Object.entries(obj)){
    console.log(`${key} : ${value}`)
}