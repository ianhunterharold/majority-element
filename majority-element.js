/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // the idea is 
    // keep track of a common element with maybe key value pairs and increment the counts.
    // highest count gets returned

    const counts = {};
    for(let i=0 ; i <nums.length; i++){
        if(counts[nums[i]]){
            counts[nums[i]] += 1;
        }
         else {
            counts[nums[i]] = 1
         }
    }
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
};
