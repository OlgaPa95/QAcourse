 class CodeTest{
    
    
    
    
    /**
 * Create a function to return an array 
 *  after removing given number from the given array
*/

 removeNumber(array, number){ 
    let arrayAfterRemove = [];
    for(let i=0; i<=array.length-1; i++){
        if(array[i]!= number){
            arrayAfterRemove.push(array[i])
        }
    }
    console.log(`\nArray after removing the given number`)
    console.log(arrayAfterRemove)
}

//removeNumber([21, 32, 12, 43, 45, 65, 12], 12);

 /**
  * Create a function to return the points to be marked against for over speeding.
  * 
  * For every 5mph over the speed limit, 1 point should be marked  * 
  * function will:
  *      take userSpeed and speedLimit as input
  *      return the number of points should be marked against the license.  * 
  * 
  * sl= 60 , us = 70 -> points = 2  * 
  * sl = 60 , us = 63 -> points = 0  * 
  * sl = 75 , us = 70 -> points = 0  * 
  * sl = 80 , us = 88 -> points = 1
  */


 

 pointsForSpeeding(userSpeed, speedLimit){
    let overSpeed = userSpeed - speedLimit;
    let numOfPoints = 0;
 
    if(overSpeed % 5 == 0){
        numOfPoints = overSpeed/5;
    }else{
        numOfPoints = (parseInt(overSpeed/5));        
    }   
    console.log(`\n${numOfPoints} points should be marked against the license`)

 }



/*Create a function to return the missing smallest positive number in given array
 * 
 * 
 * [1, 2, 3, 4, 5]   ->   6 * 
 * [2, 3, 1, 56, 23, 11]  ->   4 * 
 * [-1, 0, 2, 1]    ->  3 * 
 * [1, 1, 2, 4, 3, 6, 4, 7, 9] ->   5* 
 * 
 */
 returnSmallestMissingNum(array){    
    let number = 1;
    for (let i=0; i<=array.length-1; i++) {
    if ( array.includes(number, 0) == true) {
        number++;          
    
    }
    
}

console.log(`\nThe missing smallest positive number in given array is -> ${number} `)

   
}



 }

 module.exports = CodeTest;