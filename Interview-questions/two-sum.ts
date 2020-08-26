// this problem is taken from https://leetcode.com/problems/two-sum/description/

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// brute-force way --> O(n^2)
function twoSum(inputArr: number[], sum: number): number[] | undefined {
  if (!inputArr || inputArr.length == 0) {
    return;
  }
  const arrLength = inputArr.length;
  const indicePair: number[] = [];
  for (let i = 0; i < arrLength; i++) {
    const input1 = inputArr[i];
    for (let j = i + 1; j < arrLength; j++) {
      const input2 = inputArr[j];
      if (input1 + input2 == sum) {
        indicePair[0] = i;
        indicePair[1] = j;
        break;
      }
    }
  }

  return indicePair;
}

type Dictionary<T> = { [key: number]: T }; // needed for using obj[key] syntax
// using javascript object as dictionary/key value pair --> O(n)
function twoSum2(arr: number[], sum: number) {
  const indicePair: number[] = [];
  const myObj: Dictionary<number> = {};
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const currentValue = arr[i];
    if (Object.prototype.hasOwnProperty.call(myObj, currentValue)) {
      indicePair[0] = myObj[currentValue];
      indicePair[1] = i;
      continue;
    }
    myObj[sum - arr[i]] = i;
  }
  return indicePair;
}

console.log(twoSum([-3, 4, 3, 90], 0)); // [ 0, 2 ]
console.log(twoSum2([2, 11, 15, 7], 9)); // [ 0, 3 ]

// to run using deno --> deno run .\Interview-questions\two-sum.ts
// using ts-node --> ts-node .\Interview-questions\two-sum.ts
