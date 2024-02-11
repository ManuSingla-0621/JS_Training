function countWaysToSum(arr, targetSum) {
    let count = 0;

    function calculate(index, currentSum) {
        if (index === arr.length) {
            if (currentSum === targetSum) {
                count++;
            }
            return;
        }

        calculate(index + 1, currentSum + arr[index]);
        calculate(index + 1, currentSum - arr[index]);
    }

    calculate(0, 0);
    return count;
}

// Example usage:
const arr = [-1, 9, 8, -3, 4];
const targetSum = 5;

const ways = countWaysToSum(arr, targetSum);
console.log(ways);
