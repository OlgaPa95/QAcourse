/**
 * if the length of sentence1 >= 10, res1 = 15 else 25
  */
const sentence1 = 'Hello dear, how are you doing?';
let sent1Length = sentence1.length;
let result1 = sent1Length >= 10 ? 15 : 25;
console.log(`result1 -> ${result1}`);


const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
 let sentence2_Replace_a_Alpha = sentence2.replace(/a/gi, 'Alpha');
 console.log(`\n Sentence -> ${sentence2}`);
 console.log(`\n Sentence Replace 'a/A' with 'Alpha'-> ${sentence2_Replace_a_Alpha}`);


 const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

//1. the length of sentence-3

 let sent3Length = sentence3.length;
 console.log(`\nThe length = ${sent3Length}\n`);

//2. does sentence-3 starts with 'health' (ignore cases)

let startsWithPattern = 'health';
startsWithPattern = startsWithPattern.toUpperCase();
let sentence3_Uppercase = sentence3.toUpperCase();
let sent3StartWithHealth = sentence3_Uppercase.startsWith(startsWithPattern);
console.log(`\nSentence 3 starts with 'health' : ${sent3StartWithHealth}\n`);


//3. does sentence-3 contains  'Body' (ignore cases)
//const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";


let includesPattern = 'Body';
includesPattern = includesPattern.toUpperCase();
let sentence3_toUppercase = sentence3.toUpperCase();
let sent3Include_Body = sentence3_toUppercase.includes(includesPattern);
console.log(`\n'${sentence3}' contains  'Body' : ${sent3Include_Body}\n`);


//4. index of 'Body' in sentence3  (ignore cases)
//const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

let indexOf_Body = sentence3_toUppercase.indexOf(includesPattern);
console.log(`\n Index of 'Body' -> ${indexOf_Body}\n`);


//5. the last-character in sentence-3
//const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

let sentence3Length = sentence3.length;
let indexOf_Last_Char = sentence3Length - 1;
let charAtLastIndex = sentence3.charAt(indexOf_Last_Char);
console.log(`The last character in sentence 3 is  -> ${charAtLastIndex}`);


// 6. word 'Body' is present only once. (true or false)

//const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
//let includesPattern = 'Body';
//includesPattern = includesPattern.toUpperCase();
//let sentence3_toUppercase = sentence3.toUpperCase();
//let sent3Include_Body = sentence3_toUppercase.includes(includesPattern);
//let indexOf_Body = sentence3_toUppercase.indexOf(includesPattern);


let lastOccuranceBody = sentence3_toUppercase.lastIndexOf(includesPattern)
let containsOnce = indexOf_Body == lastOccuranceBody ? true : false;
console.log(`\n'${sentence3}' contains  'Body' only once : ${containsOnce}\n`);









