const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    },
    power: (a, b) => a ** b,
    squareRoot: (a) => Math.sqrt(a),
    temperatureConversion: (temp, fromUnit, toUnit) => {
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            return (temp * 9/5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            return (temp - 32) * 5/9;
        } else {
            throw new Error("Invalid temperature conversion");
        }
    },
    area: {
        rectangle: (length, width) => length * width,
        circle: (radius) => Math.PI * radius ** 2,
        triangle: (base, height) => 0.5 * base * height,
    },
    calculate: (func, ...args) => {
        const allowedArgs = func.length; // Number of arguments the function expects
        if (args.length !== allowedArgs) {
            throw new Error(`Function expects ${allowedArgs} arguments`);
        }
        return func(...args);
    }
};

// Example usage:
try {
    console.log(calculator.calculate(calculator.add, 5, 3)); // 8
    console.log(calculator.calculate(calculator.divide, 10, 2)); // 5
    console.log(calculator.calculate(calculator.power, 2, 3)); // 8
    console.log(calculator.calculate(calculator.temperatureConversion, 32, "fahrenheit", "celsius")); // 0
    console.log(calculator.calculate(calculator.area.rectangle, 4, 5)); // 20
} catch (error) {
    console.error(error.message);
}
