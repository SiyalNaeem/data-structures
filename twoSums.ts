function twoSum(nums: number[], target: number): number[] {

    for(let i=0; i<nums.length; i++){
        for(let j=1; j < nums.length; j++){
            let accumulatedValue = nums[i] + nums[j];
            
            if(accumulatedValue == target){
                return [i,j];
            }
        }
    }
    return [0];
    
};

const nums = [2,7,11,15];
const target = 22;

console.log(twoSum(nums, target))