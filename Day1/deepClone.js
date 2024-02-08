const originalArray = [10,20,[30,35]];
const deepCopy = JSON.parse(JSON.stringify(originalArray));
deepCopy[2][0]=99;
console.log(originalArray); // original array not changing
console.log(deepCopy);  // copy arrat changed