/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    
    salary.forEach((sal, idx) => {
        if (sal < min) {                   
            min = sal;
        } 
        
        if (sal > max) {
            max = sal;
        }
        
        sum += sal;
    })
    
    return (sum - min - max) / (salary.length - 2);
};  