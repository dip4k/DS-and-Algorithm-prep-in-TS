// find pair of elements in array is equal to sum provided to function

// O(n^2) time complexity
function hasPairWithSum(arr: number[], sum: number) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

let hasPair = hasPairWithSum([6, 4, 3, 2, 1, 7], 19);
console.log("hasPairWithSum result : ", hasPair);

// Better O(n) time complexity
function hasPairWithSum2(arr: number[], sum: number) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPair = hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
console.log("hasPairWithSum2 result : ", hasPair);

// to run program --> deno run .\Interview-questions\google-interview.ts
// or cd to dirctory and run deno on file  --> deno run .\google-interview.ts
// also can use ts-node --> ts-node .\Interview-questions\google-interview.ts
//                      --> ts-node .\google-interview.ts
