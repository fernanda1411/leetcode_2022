/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
   
  let currentPrefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    let character = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== character) {
        return currentPrefix;
      }
    }
     currentPrefix += character;
  }

  return currentPrefix;
};