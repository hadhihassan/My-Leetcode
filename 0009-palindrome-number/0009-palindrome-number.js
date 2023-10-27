/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString().split("").reverse().join("")
    return (x.toString()===string)
  
};


