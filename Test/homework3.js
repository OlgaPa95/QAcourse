
/*Q1
    Print the length of the coutry (without using String - length property)

 * 1. split() by ' '-> ['USA','USA']
 * 2. array[0].length -> print the length of first value of array
 * 
 */
let countryName = 'USA USA';
const countryName_split_space = countryName.split(' ');
let countryLength = countryName_split_space[0].length;
console.log(`\n The lenght of The country:'${countryName}' is ${countryLength}`);

/*Q2:
    Count the number of words in the sentence

    1. split() by ' '-> array
 *  2. array.length -> print the array length
*/
const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
const sentence_split_space = sentence.split(' ');
let sentenceLength = sentence_split_space.length;
console.log(`\n The number of words in sentence :'${sentence}' is ${sentenceLength}`);

/**Q3:
 * 
 * Convert any 4 word sentence into Titlecase
 * 'HaVE a GoOD MoRnINg'
 */
let sentence2 = 'HaVE a GoOD MoRnINg';
let sent2_Lowercase = sentence2.toLowerCase();
let substr0_1 = sent2_Lowercase.substring(0,1).toUpperCase();
let substr1_5 = sent2_Lowercase.substring(1,5);
let substr5_6 = sent2_Lowercase.substring(5,6).toUpperCase();
let substr6_7 = sent2_Lowercase.substring(6,7);
let substr7_8 = sent2_Lowercase.substring(7,8).toUpperCase();
let substr8_12 = sent2_Lowercase.substring(8,12);
let substr12_13 = sent2_Lowercase.substring(12,13).toUpperCase();
let substr13 = sent2_Lowercase.substring(13);
let sent2Titlecase = substr0_1.concat(substr1_5, substr5_6, substr6_7, substr7_8, substr8_12, substr12_13, substr13 )
console.log(`\n The conversion of '${sentence2}' into Titlecase is: '${sent2Titlecase}'`)



/**
 * Q4:
 * Create abbreviation for any 4-word sentence
 */
 //let sentence2 = 'HaVE a GoOD MoRnINg';

 let sentence2_Lowercase = sentence2.toLowerCase();
 let substring0_1 = sentence2.substring(0,1).toUpperCase();
 let substring5_6 = sentence2.substring(5,6).toUpperCase();
 let substring7_8 = sentence2.substring(8,9).toUpperCase();
 let substring12_13 = sentence2.substring(12,13).toUpperCase();
 
 let abbreviation = substring0_1.concat(substring5_6, substring7_8, substring12_13)
 console.log(`\n The abbreviation for ${sentence2} is : "${abbreviation}"`);