/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let map = {};
    let start = 0;
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        let lastChar = s[i];
        
        if (map[lastChar] === undefined) {
            map[lastChar] = 0;
        }
        map[lastChar] += 1;
        
        while (map[lastChar] > 1) {
            let firstChar = s[start];
            map[firstChar] -= 1;
            start += 1;
        }
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
};