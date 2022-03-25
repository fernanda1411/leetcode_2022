/**
 * @param {number[]} salary
 * @return {number}
 */
const average = (salary) => {
    let min = null;
    let max = null;
    let sum = 0;
    
    salary.forEach((sal, idx) => {
        if (min === null && max === null) {
            min = sal;
            max = sal;
        } else {
            if (sal < min) {
                if (idx > 1) {
                    sum += min;     
                }                    
                min = sal;
            } else if (sal > max) {
                 if (idx > 1) {
                    sum += max;    
                 }
                max = sal;
            } else {
                sum += sal;
            }
        }
    })
    
    return sum / (salary.length - 2);
};  