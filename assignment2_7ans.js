var isMonotonic = function(nums) {
    let asc = true;
 let des = true;
 for (let i = 0; i < nums.length - 1; i++) {
   if (nums[i] > nums[i + 1]) {
     asc = false;
   } else if (nums[i] < nums[i + 1]) {
     des = false;
   }
 }
 return asc || des;
};