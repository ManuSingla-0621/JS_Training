function minReversalsToBalance(expression) {
    const stack = [];

    // If the length of the expression is odd, it can't be balanced
    if (expression.length % 2 !== 0) {
        return -1;
    }

    // Iterate through the expression
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === '{') {
            stack.push(char);
        } else if (char === '}') {
            // If stack is empty, there's no matching opening bracket, so we need to reverse
            if (stack.length === 0) {
                stack.push(char); // Reversal of this closing bracket
            } else if (stack[stack.length - 1] === '{') {
                stack.pop(); // Matched opening bracket, pop it from the stack
            } else {
                stack.push(char); // Reversal of this closing bracket
            }
        }
    }

    // At this point, stack will contain only the unbalanced brackets
    const unbalancedCount = stack.length;

    // The number of reversals required will be half of the unbalanced brackets
    const minReversals = Math.ceil(unbalancedCount / 2);

    return minReversals;
}

const expression = "}{}{{{";
console.log("Minimum number of reversals required:", minReversalsToBalance(expression));
