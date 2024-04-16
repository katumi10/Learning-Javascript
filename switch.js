// switch statement is used to perform different actions based on differenr conditions
//The switch expression is evaluated once.The value of the expression is compared with the values of eachcase
//Better than many if else statements
//syntax:   
/*  switch(expression){
case x:
        //code block
        break;
case y:
        //code block
        break;
     default:
        //code block       
}
*/

let today = new Date().getDay();

switch(today){
    case 0:
        day= "sunday";
        break;               //the break keyword breaks out the switch
    case 1:                  //this will stop the execution inside the 
        day = "Monday";      // switch block 
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        default:       //default keyword specifies the cod eto run if 
        day = "Looking forward to the weekend"  //there is no case match
}
console.log(today)
