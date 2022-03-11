/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;
    let indexes = [];
    
    while (start < end) {
        if (numbers[start] + numbers[end] === target){
            indexes.push(start + 1);
            indexes.push(end + 1);
        }
        
        if (numbers[start] + numbers[end] > target){
            end--;
        } else {
            start++;
        }

    }
    
    return indexes;
};