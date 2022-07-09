
/*Q1
    Print the length of the coutry (without using String - length property)

 * 1. split() by ''-> ['M','o','l','d','o','v','a']
 * 2. array.length -> print the length of array
 * 
 */
let countryName = 'Moldova';
const countryName_split = countryName.split('');
let countryLength = countryName_split.length;
console.log(`\n The lenght of The country:'${countryName}' is ${countryLength}`);

/*Q2:
    Count the number of words in the sentence

    PSEUDO CODE:
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


/**PSEUDO CODE:
 * split(' ') ->array
 * find array[0]charAt(0) -> toUppercase()
 * find array[0]substring(1) -> toLowercase()
 * continue for array[1],array[2] and array[3]
 * 
 * Titlecase = substring1+ substring2 +...+substringN
 */
let sentence2 = 'HaVE a GoOD MoRnINg';
const sentence2Split_space = sentence2.split(' ');
let substr1 = sentence2Split_space[0].charAt(0).toUpperCase();
let substr2 = sentence2Split_space[0].substring(1).toLowerCase();

let substr3 = sentence2Split_space[1].charAt(0).toUpperCase();
let substr4 = sentence2Split_space[1].substring(1).toLowerCase();

let substr5 = sentence2Split_space[2].charAt(0).toUpperCase();
let substr6 = sentence2Split_space[2].substring(1).toLowerCase();

let substr7 = sentence2Split_space[3].charAt(0).toUpperCase();
let substr8 = sentence2Split_space[3].substring(1).toLowerCase();

let sent2Titlecase = substr1 + substr2 +' '+ substr3 + substr4 + ' '+ substr5 + substr6 + ' '+ substr7 + substr8;
console.log(`\n The conversion of '${sentence2}' into Titlecase is: '${sent2Titlecase}'`)



/**
 * Q4:
 * Create abbreviation for any 4-word sentence
 */
/**PSEUDO CODE:
 * split(' ') ->array
 * find array[0]charAt(0) -> toUppercase()
 * continue for array[1],array[2] and array[3]
 * abbreviation = .concat() - all of the above substrings
 */
 //let sentence2 = 'HaVE a GoOD MoRnINg';

const sent2Split_space = sentence2.split(' '); 
let substrng1 = sentence2Split_space[0].charAt(0).toUpperCase();
let substrng2 = sentence2Split_space[1].charAt(0).toUpperCase();
let substrng3 = sentence2Split_space[2].charAt(0).toUpperCase();
let substrng4 = sentence2Split_space[3].charAt(0).toUpperCase();

let abbreviation = substrng1.concat(substrng2, substrng3, substrng4)
console.log(`\n The abbreviation for ${sentence2} is : "${abbreviation}"`);