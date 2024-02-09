function convertSourceToResult(source) {
    const result = {};

    // Iterate through the source array
    source.forEach(obj => {
        // Extract batch_id from the object
        const batchId = obj.batch_id;
        // Remove batch_id from the object
        delete obj.batch_id;

        // Check if the batch_id exists in the result object
        if (result[batchId]) {
            // If batch_id exists, push the object to the corresponding batch array
            result[batchId].push(obj);
        } else {
            // If batch_id does not exist, create a new batch array and add the object
            result[batchId] = [obj];
        }
    });

    return result;
}

// Example usage:
const source = [
    { batch_id: '1', name: 'John', contact: '1234567890' },
    { batch_id: '2', name: 'Alice', contact: '9876543210' },
    { batch_id: '1', name: 'Bob', contact: '4567891230' }
];

const result = convertSourceToResult(source);
console.log(result);

