/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b) => a-b)
    let length = nums.length
    return (nums[length - 1] * nums[length - 2]) - (nums[1] * nums[0])
};