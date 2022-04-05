//O(n^2)
function twoSum(nums: number[], target: number): number[] {

    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            let accumulatedValue = nums[i] + nums[j];
            
            if(accumulatedValue == target){
                return [i,j];
            }
        }
    }
    return [];
    
};

// O(n)
function twoSum2(nums: number[], target: number): number[] {
    let obj: any = {};
    for(let i=0; i<nums.length; i++){

        let diff = target - nums[i];
        if(diff in obj){
            return [obj[diff], i];
        }else{
            obj[nums[i]] = i;
        }

    }
    return [];
    
};

const nums = [2,11,11,15];
const target = 22;

console.log(twoSum2(nums, target))