/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    // store the running characters and a longest string length variable
    let currentString = [];
    let longestStringLength = 0;

    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        // Attempt to get the current character's position in the current string
        const currentCharacterPosition = currentString.indexOf(s[i]);

        // Check if the current character exists in the current string
        if (currentCharacterPosition !== -1) {
            // Chop the array off after the occurence of the character
            currentString.splice(0, currentCharacterPosition + 1);
        }

        // Add the current character to the array
        currentString.push(s[i]);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(longestStringLength, currentString.length);
    }

    return longestStringLength;
};