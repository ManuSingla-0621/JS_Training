function deepClone(obj) {
    // If obj is not an object or is null, return obj itself
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Create a new object to store the cloned properties
    const clone = {};

    // Iterate through each property of the object
    for (let key in obj) {
        // Check if the property belongs to the object itself (not from prototype chain)
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // If the property is an object, recursively clone it
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // Recursive call to deepClone function
                clone[key] = deepClone(obj[key]);
            } else {
                // If the property is not an object, assign it directly to the clone
                clone[key] = obj[key];
            }
        }
    }

    return clone;
}

// Example usage:
const originalObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: {
                name:"Mohan",
                address:{
                    city:"delhi",
                    state:"UP"
                }
            }
        }
    }
};

// Perform a deep clone up to an inner level
const clonedObj = deepClone(originalObj);
console.log(JSON.stringify(clonedObj)); // Output: { a: 1, b: { c: 2, d: { e: {name : Mohan ,address : {city : delhi , state : UP}}   } } }

// Modifying the clonedObj should not affect the originalObj
clonedObj.b.d.e.name = "Manu";
console.log(JSON.stringify(clonedObj)); // Output: { a: 1, b: { c: 5, d: { e: {name :Manu,address{city:delhi,state :UP}}}}}
console.log(JSON.stringify(originalObj)); // Output: { a: 1, b: { c: 2, d: { e: {name : Mohan ,address:{city:delhi,state:UP}}}}}
