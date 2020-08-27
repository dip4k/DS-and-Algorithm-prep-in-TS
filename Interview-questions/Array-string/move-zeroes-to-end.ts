// problem statetement https://leetcode.com/problems/move-zeroes/
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// brute-force
/**
 * @param  {number[]} nums
 * @returns number[]
 */
function moveZeroes(nums: number[]): number[] {
  if (!nums || nums.length < 2) {
    return nums;
  }
  const zeroItemIndex = nums.indexOf(0); // O(n)
  if (zeroItemIndex == -1) {
    return nums; // if input have no zero element then return input (all array element are non-zero)
  }
  let moved = 0;
  // works like sliding frame (if 0 found delete that and add 0 at end)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i - moved] === 0) {
      nums.splice(i - moved, 1); // if this operation is O(N), then full implementation has O(N^2)
      nums.push(0);
      moved++;
    }
  }

  return nums;
}

/**
 * @param  {number[]} nums
 * @returns number[]
 */
const moveZeroes2 = function (nums: number[]): number[] {
  if (!nums || nums.length < 2) {
    return nums; // if empty or have only one element return input
  }
  let zeroPlaceIndicator = nums.indexOf(0); // O(n)
  if (zeroPlaceIndicator == -1) {
    return nums; // if input have no zero element then return input (all array element are non-zero)
  }
  // O(n) in worst case
  for (let i = zeroPlaceIndicator; i < nums.length; i++) {
    const current = nums[i];
    if (current != 0) {
      nums[zeroPlaceIndicator] = current;
      zeroPlaceIndicator++;
      nums[i] = 0;
    }
  }
  // space complexity --> O(1);
  return nums; // total time complexity ==> O(n)+O(n) => O(2n) => O(n)
};

/**
 * @param  {number[]} nums
 * @returns number[]
 */
function moveZeroes3(nums: number[]): number[] {
  if (!nums || nums.length < 2) {
    return nums; // if empty or have only one element return input
  }
  const zeroItemIndex = nums.indexOf(0); // O(n)
  if (zeroItemIndex == -1) {
    return nums; // if input have no zero element then return input (all array element are non-zero)
  }

  let nonZeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current != 0) {
      nums[nonZeroCount] = current;
      nonZeroCount++;
    }
  }
  // fill (total length) - nonZeroCount 0's
  for (let j = nonZeroCount; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums; // time --> O(n), space O(1)
}

console.log(moveZeroes([0, 1, 0, 3, 12, 45, 12, 9, 0, 2, 0]));

console.log(moveZeroes2([0, 1, 0, 3, 12]));

console.log(moveZeroes3([0, 1, 0, 3, 12]));

// run --> deno run .\Interview-questions\Array-string\move-zeroes-to-end.ts
// ts-node --> ts-node .\Interview-questions\Array-string\move-zeroes-to-end.ts
