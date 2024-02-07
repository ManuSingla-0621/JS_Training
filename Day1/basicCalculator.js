function calculator() // calculate method helping in performing the certain operations
{
    let result = null; // storing the result after performing the operation
    switch(operationPerformed)
    {
        case '+' :  result = valueOfFirstNumber+valueOfSecondNumber; // addition operation
                    break;
        case '-' :  result = valueOfFirstNumber-valueOfSecondNumber; // subtraction operation
                    break;
        case '*' :  result = valueOfFirstNumber*valueOfSecondNumber; // multiplication operation
                    break;
        case '/' :  result = valueOfFirstNumber/valueOfSecondNumber; // division operation
                    break;
        case '%' : result = valueOfFirstNumber%valueOfSecondNumber; // modulus operation
                   break;
    }
    return result; // returning the result
}
let valueOfFirstNumber = 10; // first value from user
let valueOfSecondNumber = 2; // second value from user
let operationPerformed = '/' // operation which is actually we have to performed
console.log(calculator()); // printing the result on the console