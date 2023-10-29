/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ")
    let filteredArray = words.filter(item => item.trim() !== "");
    let lastWord = filteredArray.pop()
    return lastWord.length
};