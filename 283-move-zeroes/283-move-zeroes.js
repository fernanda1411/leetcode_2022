/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// const moveZeroes = (nums) => {
//     const result = nums.filter(num => num !== 0);
    
//     for (let i = 0; i <= nums.length - result.length ; i++) {
//         result.push(0);
//     }
        
//     return result;
// }

// const moveZeroes = (nums) => {
//     const result = [];
//     let count = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             count++;
//         } else {
//             result.push(nums[i]);
//         }
         
//     }
    
//     for (let i = 0; i < count; i++) {
//         result.push(0);
//     }
        
//     return result;
// }

const moveZeroes = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

