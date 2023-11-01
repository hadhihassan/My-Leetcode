/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let s = new Set(nums)
    let array = Array.from(s)
    let newarray= array.sort((a, b) => b - a);
    if(newarray.length > 3){
        return newarray[2]
    }
    if(newarray.length === 2){
        return Math.max(...newarray)
    }else{
        return newarray[newarray.length-1]
    }


};