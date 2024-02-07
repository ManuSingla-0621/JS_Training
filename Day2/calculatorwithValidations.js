const calculator = {
    // Helper function to check if a variable is a number
    isNumber: function(value) {
        return typeof value === 'number' && !isNaN(value);
    },
    // Helper function to check if a variable is a string
    isString: function(value) {
        return typeof value === 'string';
    },
    // Helper function to check if a variable is declared
    isDeclared: function(variable) {
        return variable !== undefined;
    },
    // Helper function to check if a variable is initialized
    isInitialized: function(variable) {
        return this.isDeclared(variable) && this.isNumber(variable);
    },
    // Helper function to validate arguments and return appropriate error message
    validateArguments: function(args, expectedCount) {
        if (args.length !== expectedCount) {
            return `Expected ${expectedCount} arguments, but received ${args.length}`;
        }
        for (let arg of args) {
            if (!this.isNumber(arg)) {
                return `Argument '${arg}' is not a valid number`;
            }
        }
        return null; // No validation error
    },
    add: function(a, b) {
        const validationError = this.validateArguments(arguments, 2);
        if (validationError) return validationError;
        return a + b;
    },
    subtract: function(a, b) {
        const validationError = this.validateArguments(arguments, 2);
        if (validationError) return validationError;
        return a - b;
    },
    multiply: function(a, b) {
        const validationError = this.validateArguments(arguments, 2);
        if (validationError) return validationError;
        return a * b;
    },
    divide: function(a, b) {
        const validationError = this.validateArguments(arguments, 2);
        if (validationError) return validationError;
        if (b === 0) {
            return "Division by zero";
        }
        return a / b;
    },
    power: function(a, b) {
        const validationError = this.validateArguments(arguments, 2);
        if (validationError) return validationError;
        return Math.pow(a, b);
    },
    squareRoot: function(a) {
        const validationError = this.validateArguments(arguments, 1);
        if (validationError) return validationError;
        if (a < 0) {
            return "Cannot calculate square root of a negative number";
        }
        return Math.sqrt(a);
    },
    // Other methods like temperatureConversion and area would also have similar validation logic
};

// Example usage:
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.add(5)); // Output: Expected 2 arguments, but received 1
console.log(calculator.add(5, "abc")); // Output: Argument 'abc' is not a valid number
console.log(calculator.divide(10, 0)); // Output: Division by zero
console.log(calculator.squareRoot(-4)); // Output: Cannot calculate square root of a negative number
