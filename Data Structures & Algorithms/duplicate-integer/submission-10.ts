class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //1,2,3,2
    hasDuplicate(nums: number[]): boolean {
       let result: boolean= false;
       const seen = new Set<number>();

       //create a set to make less heavy.
       for(let i=0; i<nums.length; i++){
        //1,2,3,3
        //{1} -> {1,2} -> {1,2,3} ->
        if(seen.has(nums[i])){
            result=true;
        }
        seen.add(nums[i]);
       }
    return result;
    }   
}