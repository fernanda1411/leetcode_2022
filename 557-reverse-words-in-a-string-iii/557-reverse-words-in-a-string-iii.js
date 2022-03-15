/**
 * @param {string} s
 * @return {string}
 */



const reverseWords = s => { 
    
    const reverseWord = word => {
        let str = '';
        for (let i = word.length - 1; i >= 0; i--) {

            str += word.charAt(i);
        }
        return str;
    }
    
    return s
        .split(' ')
        .map(word => reverseWord(word))
        .join(' ');  
};
