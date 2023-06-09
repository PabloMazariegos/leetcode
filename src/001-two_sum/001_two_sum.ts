/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/


export const twoSum = (nums: number[], target: number) => {
    const hash: { [key: number] : number} = {};

    for(let index = 0; index < nums.length; index++){
        const num = nums[index];

        if(hash.hasOwnProperty(num)){
            return [hash[num], index];
        }

        hash[target - num] = index;
    }

    return [Infinity, Infinity];
}