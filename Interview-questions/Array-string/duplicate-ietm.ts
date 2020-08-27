// Contains Duplicate --> https://leetcode.com/problems/contains-duplicate/description/
// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// brute-force
function containsDuplicate(nums: number[]): boolean {
  if (!nums || nums.length < 2) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
}

// using set O(n)
function containsDuplicate2(nums: number[]): boolean {
  if (!nums || nums.length < 2) {
    return false;
  }
  return nums.length != new Set(nums).size;
}

// using js object as dictionary
export type Dictionary<T> = { [key: number]: T };
function containsDuplicate3(nums: number[]): boolean {
  if (!nums || nums.length < 2) {
    return false;
  }
  const obj: Dictionary<number> = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (Object.prototype.hasOwnProperty.call(obj, current)) {
      return true;
    } else {
      obj[current] = current;
    }
  }
  return false;
}

// sort and compare
function containsDuplicate4(nums: number[]): boolean {
  if (!nums || nums.length < 2) {
    return false;
  }
  nums.sort();
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++, j++) {
    if (nums[i] === nums[j]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate4([1, 2, 3, 1]));

// run --> deno run .\Interview-questions\Array-string\duplicate-ietm.ts
// run --> ts-node .\Interview-questions\Array-string\duplicate-ietm.ts
