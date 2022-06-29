let myName = null;
console.log(myName)


//to store 'Happy' in myName variable

myName = 'Happy';
console.log(myName)

let planets = ['Earth', 'Mercury','Saturn']
console.log(planets)


var student1 = {
    name : 'Olga' ,
    age : 26 ,
    location : 'USA',
    gender : 'F'

}

console.log(student1.name)
// modulus - returns the remaining from a division
let num1 = 10;
let num2 = 4;
let num3 = num1 % num2;
console.log(num3)


num1 = 10
console.log(num1)
num1++;
num1++;
console.log(num1)
 let num4 = num1++
 console.log(num4)

 let num5= ++num1
 console.log(num5)

let lVar1 = 10
let lVar2 = 20
let lVar3 = 30
let lVar4 = 40

let res1 = lVar1 + lVar2++; //does the aqddition firts, asignment , then--the increment
console.log(`lVar1 = ${lVar1}`)

//  \n\n --creates a gap between lines
console.log(`\n\nlVar2 = ${lVar2}`)
console.log(`res1' =${res1}`)

//let abc = 2+1
let res2 = lVar1++ - ++lVar2
console.log(lVar1)
console.log(lVar2)
console.log(res2)





let teamSize = 7;
teamSize++;
let teamName ='Warriors';
console.log(`Our team name is ${teamName} and our team size is ${teamSize}`);