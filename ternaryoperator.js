 /* a shortcut for a "if/else statement"
   takes three operands
   1. a condition
   2. expression if true
   3. expression if false.
   */


   let voteable = candidate(29);
 console.log(voteable)

    function candidate(age){
   return (age < 18) ? "Too young" : "too old";        
    }

    
let time = checkTime(3.00);
 console.log(time)

 function checkTime(time){
    return time > 12.00 ? "good day" : "good morning";
 }
