let findLHS = function(nums) {
    nums = nums.sort((a,b)=> a-b)
left = 0; right= 1
result = 0
while(right < nums.length){
let diff = nums[right] - nums[left];
if (diff == 1) {
result = Math.max(result, right-left + 1)
}
if (diff <= 1){
right++;
}
else{
left++
}
}
return result

};