function calculateExpression(expression) {
    // Helper function to evaluate operation
    function evaluate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
    }

    const stack = [];

    for (let char of expression) {
        if (!isNaN(char)) {
            stack.push(Number(char));
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            let subExpressionResult = 0;
            while (stack[stack.length - 1] !== '(') {
                let b = stack.pop();
                let operator = stack.pop();
                let a = stack.pop();
                subExpressionResult = evaluate(a, b, operator);
                stack.push(subExpressionResult);
            }
            stack.pop(); // Pop '('
            stack.push(subExpressionResult); // Push the result of sub-expression
        } else if (char === '+' || char === '-' || char === '*' || char === '/') {
            stack.push(char);
        }
    }

    let result = 0;
    while (stack.length > 1) {
        let b = stack.pop();
        let operator = stack.pop();
        let a = stack.pop();
        result = evaluate(a, b, operator);
        stack.push(result);
    }

    return stack.pop();
}

// Example usage:
const expression = "1+(2+3)*4-10/2";
console.log("Result:", calculateExpression(expression)); // Output should be 17
