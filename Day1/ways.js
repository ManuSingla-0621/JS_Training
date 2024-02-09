function countWaysToSum(arr, sum) {
    const n = arr.length;

    // Create a 2D array to store the number of ways to achieve each sum
    const dp = Array.from({ length: n + 1 }, () => Array(sum * 2 + 1).fill(0));

    // Initialize the base case (when no elements are chosen)
    dp[0][sum] = 1;

    // Iterate through each element of the array
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= sum * 2; j++) {
            // Calculate the number of ways to achieve the current sum with the current element
            dp[i][j] = (dp[i - 1][j - arr[i - 1]] || 0) + (dp[i - 1][j + arr[i - 1]] || 0);
        }
    }

    // The result is stored in dp[n][sum]
    return dp[n][sum];
}

// Example usage:
const arr = [-1, 9, 8, -3, 4];
const sum = 5;

const totalWays = countWaysToSum(arr, sum);
console.log("Total number of ways:", totalWays);
