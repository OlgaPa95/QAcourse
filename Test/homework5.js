// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
let sentence = 'YOu lIVe ONlY ONcE';
console.log(`\nsentence -> ${sentence}`);
let titleCase = '';
const sentenceWords = sentence.toLowerCase().split(' ');
 
for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
     titleCase = titleCase + sentenceWords[i].substring(0,1).toUpperCase() + sentenceWords[i].substring(1) + ' ';
     
 }
console.log(`\nTitle Case Sentence -> ${titleCase}\n`);
 






/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
 let sentence1 = 'hello dear how are you doing';
 console.log(`Sentence before reverse -> ${sentence1}`);
 let sentenceReverse = '';
 const sentenceSplit = sentence1.split(' ');

 for (let i=sentenceSplit.length-1 ; i >= 0 ; i-- ) {
    sentenceReverse = sentenceReverse + sentenceSplit[i] + ' ';
       
}
    console.log(`\nReversed Sentence -> ${sentenceReverse}\n`);
/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
let array1 = [1, 1, 1, 2, 3, 1, 2];
let sumArray = 0;
for (let i=0 ; i <= array1.length-1 ; i++ ) {
    sumArray = sumArray + array1[i];
    
}
console.log(`\nTotal of numbers in the array = ${sumArray}\n`);

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
 let array2 = [1, 2, 3, 4, 5];
 let sumArray2 = 0;
 let numberOfValues = array2.length;
 let avg = sumArray2/numberOfValues;
 for (let i=0 ; i <= array2.length-1 ; i++ ) {
     sumArray2 = sumArray2 + array2[i];
     avg = sumArray2/numberOfValues;     
 }

 console.log(`\nAverage of the array 2 = ${avg}\n`);