/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return  n > 0 && (n & (n - 1)) === 0 && (n - 1) % 3 === 0;
};