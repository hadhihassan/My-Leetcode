/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let p = strs[0];
    let l = "";
    for (let i = 0; i < p.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== p[i]) {
                return l;
            }
        }
        l += p[i];
    }

    return l;
};

