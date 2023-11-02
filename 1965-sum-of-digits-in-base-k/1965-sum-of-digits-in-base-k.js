/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let basednumbers =[]
    while(n > 0){
        let div = n % k
        basednumbers.push(div)
        n = Math.floor(n / k)
    }
    let sum = basednumbers.reduce((sum,digit) => sum + digit,0)
    return sum
};