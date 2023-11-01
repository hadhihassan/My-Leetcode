/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  var values = new Set()
  for(var i=0;i<nums.length;i++){
    if(values.has(nums[i])){
      return nums[i]
    }else{
      values.add(nums[i])
    }
  }
  
   
};



