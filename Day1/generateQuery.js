function generateQueryString(obj, url) {
    let queryString = url;
    
    // Check if the URL already contains a query string
    const hasQueryString = url.includes('?');

    // Iterate over the key-value pairs of the object
    for (let key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            // If it's the first key-value pair, start with '?'
            if (!hasQueryString) {
                queryString += `?${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
                hasQueryString=true;
            } else {
                queryString += `&${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
            }
        }
    }

    return queryString;
}

// Example usage:
const obj = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
};

const url = "https://localhost:400";

const queryStringURL = generateQueryString(obj, url);
console.log(queryStringURL);
