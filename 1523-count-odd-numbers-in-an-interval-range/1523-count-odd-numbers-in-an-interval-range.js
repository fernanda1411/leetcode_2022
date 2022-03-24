/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {    
    const nums = high - low;
    const n = low % 2 === 0 ? nums : nums + 1;
    
    return n / 2;
};


// const countOdds2 = (low, high) => {
    // let count = 0;

    // for (let i = low; i <= high; i++) {
    //     if (i % 2 !== 0) {
    //         count++;
    //     }
    // }
    // return count;
// }