/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    let result = {};
    
    for (let num of nums) {
        if (num in result) {
            return true;
        } else {
            result[num] = true;
        }
    }
    return false;
};