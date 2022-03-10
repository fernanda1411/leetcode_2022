/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const result = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]]) {
            return true;
        } 
        result[nums[i]] = true;
    }

    return false;
};
