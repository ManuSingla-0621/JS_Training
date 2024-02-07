function advanceOperation() // create the method which is doing the advance operations according to the requirements
{
    if(firstNumber<0 || secondNumber<0)
       console.log("The given number is negative but required value for the particular"
                    +"operation is positive");
   let result = null;
   switch(operationsPerformed) // switch(expression)
   {
    case "pow" : result = Math.pow(firstNumber,secondNumber); // calculate x raise to power
                break;
    case "sqrt" : result = Math.sqrt(firstNumber); // calculate the sqrt of the variables
                break;
    case "log" : result = Math.log(firstNumber); // finding the log of the number
                break; 
    case "ln" : result = Math.log2(firstNumber); // finding the log base 2 of the number
                break;
    case "square" : result = firstNumber*firstNumber; // finding the square of the number
                 break;
    case "area" : result =Math.PI*(Math.pow(firstNumber,2)); // getting the area of the circle
                 break;
    case "sin" : result = Math.sin(firstNumber*Math.PI/180); // getting the sin value
                 break;
    case  "cos" : result = Math.cos(firstNumber*Math.PI/180); // getting the cos value
                 break;
    case  "tan" :  result = Math.tan(firstNumber*Math.PI/180); // getting the tan value 
                 break;
   } 
   return result;
}

let firstNumber = 8;
let secondNumber = 3;
let operationsPerformed = "area";
console.log(advanceOperation());
