function flattenObject(obj, parentKey = '') {
    let flattened = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(flattened, flattenObject(obj[key], `${parentKey}${key}.`));
        } else {
            flattened[`${parentKey}${key}`] = obj[key];
        }
    }

    return flattened;
}

// Example usage:
const nestedObject = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
        "keyA": true,
        "keyB": false,
        "keyC": {
            "keyCOne": "key C one value",
            "keyCTwo": "key C two value",
            "keyCThree": 1234
        }
    }
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
