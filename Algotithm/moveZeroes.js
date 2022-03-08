/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


Follow up: Could you minimize the total number of operations done?

https://leetcode.com/problems/move-zeroes/

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};




/*  Another solution but creating a new array, do not work for this problem */

const moveZeroes1 = (nums) => {
  const result = nums.filter(num => num !== 0);

  for (let i = 0; i <= nums.length - result.length ; i++) {
    result.push(0);
  }
  return result;
};

/*  Another solution but creating a new array, do not work for this problem */

const moveZeroes2 = (nums) => {
  const result = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      result.push(nums[i]);
    }
}
  for (let i = 0; i < count; i++) {
    result.push(0);
  }
  return result;
};
