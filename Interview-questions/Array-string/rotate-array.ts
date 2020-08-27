// Rotate Array --> https://leetcode.com/problems/rotate-array/description/

// using splice and pop
const rotate = function (nums: number[], k: number): number[] {
  for (let i = 0; i < k; i++) {
    nums.splice(0, 0, nums.pop() as number);
  }
  return nums;
};

const rotate2 = function (nums: number[], k: number): number[] {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop() as number);
  }
  return nums;
};

// rotate brute force
const rotate3 = (nums: number[], k: number): number[] => {
  k %= nums.length; // gives actual shift length
  let temp, previous;
  // shift element to right for k times
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1]; // store last element as previous, it will replace 1 element
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
  return nums;
};

// using reverse
let rotate4 = function (nums: number[], k: number) {
  k %= nums.length;
  // reverse array
  nums.reverse();
  // reverse first k
  nums.splice(0, k, ...nums.slice(0, k).reverse());
  // reverse n-k to n (k+1 to end)
  nums.splice(k, nums.length - k, ...nums.slice(k).reverse());
  return nums; // return result

  nums.splice(0, 0, ...nums.slice(nums.length - k));
  nums.splice(nums.length - k, k);
};

// cleaner version using splice and slice
const rotate5 = function (nums: number[], k: number) {
  k %= nums.length;
  // add last k elements before 0th index element
  nums.splice(0, 0, ...nums.slice(nums.length - k));
  // remove last k elements
  nums.splice(nums.length - k, k);
  return nums;
};

// same using unshift
const rotate6 = function (nums: number[], k: number) {
  k %= nums.length;
  // add last k elements before 0th index element
  nums.unshift(...nums.slice(nums.length - k));
  // remove last k elements
  nums.splice(nums.length - k, k);
  return nums;
};

console.log(rotate5([1, 2, 3, 4, 5, 6, 7], 3));

// run --> deno run .\Interview-questions\Array-string\rotate-array.ts
// run --> ts-node .\Interview-questions\Array-string\rotate-array.ts
