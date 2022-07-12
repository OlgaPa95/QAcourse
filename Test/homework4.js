// Due date: Fri (Jul 15) eod

/**
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */


let studentScore = 112;
let maxScore = 100;
let studentGrade = '';
let studentPercentage = studentScore * 100 / maxScore;

if (studentPercentage >= 91 && studentPercentage <= 100){   
    console.log(`Student grade is 'A'`);

}else if (studentPercentage >= 81 && studentPercentage <= 90.99){
    console.log(`Student grade is 'B'`);

}else if(studentPercentage >= 71 && studentPercentage <= 80.99){
    console.log(`Student grade is 'C'`);

}else if(studentPercentage >= 61 && studentPercentage <= 70.99){
    console.log(`Student grade is 'D'`);

}else if(studentPercentage >= 51 && studentPercentage <= 60.99){
    console.log(`Student grade is 'E'`);

}else if( studentPercentage <51){
    console.log(`Student grade is 'F'`);

}else 
    console.log(`Invalid student score`);
    





/**
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 *  
 */
let myNumber = 15;

if (myNumber % 5 == 0){
    if(myNumber % 3 == 0){
        console.log(`\nNumber is divisible by 5 and 3`);
    } else
    console.log(`\nNumber is divisible by 5`);

}else if (myNumber % 3 == 0){
        console.log(`\nNumber is divisible by 3`);
}else 
console.log(`\nNumber is ${myNumber}`);



/**
 * let planets = ['Earth','Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */
 let planets = ['Earth','Mercury','Jupiter','Saturn','Mars', 'Venus', 'Pluto'];

if(planets.indexOf('Earth')== 0){
    console.log(`\nEarth is mentioned in expected index`);
}else 
    planets.unshift('Earth');
    console.log(planets);


/**
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, 
 *    replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */

const sports = ['Football', 'Soccer','Baseball', 'Rugby'];
let replacedValue = sports[2];
if (sports.includes('BASKETBALL')){
    if( sports.indexOf('BASKETBALL')== 2){
        console.log(`\nBASKETBALL is present at index-2`);
    } else {
        console.log(`\nBASKETBALL is mentioned in the sports array`);
    }
    
} else {
    
    sports.splice(2, 1, 'BASKETBALL');
    console.log(`Replaced value -> ${replacedValue}`);
    console.log(sports);
}

// Exercise from above, but with Ignore cases

/**
 * sports array -> toString() -> toLowercase()
 * 
 * if sports string lowercase contains 'BASKETBALL'.toLowerCase()
 *      split string lowercase into array
 *      check if 'BASKETBALL'.toLowerCase() present at index-2
 *              print : BASKETBALL is present at index-2
 *      else 
 *              print : BASKETBALL is present in array
 * else 
 *      sports1.splice(2, 1, 'BASKETBALL')
        print Replaced value 
        print array
 */
 const sports1 = ['Football', 'Soccer','BASKETBALL','Baseball', 'Rugby'];
let sportsLowercase = sports1.toString().toLowerCase();
let  sportsArrayLC = sportsLowercase.split(',');
if (sportsLowercase.includes('BASKETBALL'.toLowerCase())){   

     if( sportsArrayLC.indexOf('BASKETBALL'.toLowerCase())== 2){

        console.log(`\nBASKETBALL is present at index-2`);

    } else {

        console.log(`\nBASKETBALL is mentioned in the sports array`);
    }
    
} else {
    
    sports1.splice(2, 1, 'BASKETBALL');
    console.log(`Replaced value -> ${sportsArrayLC[2]}`);
    console.log(sportsArrayLC);
}

