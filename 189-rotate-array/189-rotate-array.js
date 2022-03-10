/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    
//     const times = k % nums.length;
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
    
//     return nums;
    
        const times = k % nums.length;
        const temp = nums.splice(times * -1);
        return nums.unshift(...temp);
};