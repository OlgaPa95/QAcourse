/** *
 * Convert temperatures values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C 
 * 
 */

//F -> C
// T(°C) = (T(°F) - 32) * 5/9

let fTemp = 78;
let cTemp = (fTemp - 32) * 5/9;
console.log(`\n${fTemp} °F equals ${cTemp} °C.`);

//F -> K
//T(K) = (T(°F) + 459.67)* 5/9

let fTemp1 = 98;
let kTemp = (fTemp1 + 459.67)* 5/9;
console.log(`\n${fTemp1} °F equals ${kTemp} K.`);


//C -> F
//T(°F) = T(°C) × 9/5 + 32

let cTemp2 = 36.6;
let fTemp2 = cTemp2 * 9/5 + 32;
console.log(`\n${cTemp2} °C equals ${fTemp2} °F.`);

//C -> K
//T(K) = T(°C) + 273.15
let cTemp3 = 45;
let kTemp3 = cTemp3 + 273.15;
console.log(`\n${cTemp3} °C equals ${kTemp3} K.`);

//K -> F
//T(°F) = T(K) × 9/5 - 459.67

let kTemp4 = 98;
let fTemp4 = kTemp4 * 9/5 - 459.67;
console.log(`\n${kTemp4} K equals ${fTemp4} °F.`);

//K -> C 
//T(°C) = T(K) - 273.15

let kTemp5 = 168;
let cTemp5 = kTemp5 - 273.15;
console.log(`\n${kTemp5} K equals ${cTemp5} °C.\n`);