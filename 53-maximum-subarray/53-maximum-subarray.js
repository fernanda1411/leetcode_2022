/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let currSum = -Infinity;
    let maxSum = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        // Math.max -> returns the largest of the zero or more numbers given as input parameters
        currSum = Math.max(0, currSum);
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};