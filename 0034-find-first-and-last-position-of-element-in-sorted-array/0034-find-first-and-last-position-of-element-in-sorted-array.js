/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let pos = []
  for(let i = 0; i<nums.length;i++ ){
      if(target === nums[i] && pos.length == 0){
          pos.push(i)
      }else if(target === nums[i]){
          pos[1]=i
      }
  }  
  if(pos.length === 1){
      pos.push(pos[0])
  }
  if(pos.length === 0){
      return [-1,-1]
  }
  return pos
};