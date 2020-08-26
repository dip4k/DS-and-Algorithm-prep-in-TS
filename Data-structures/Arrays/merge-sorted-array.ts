// merge two number array in sorted manner
// problem statement --> input --> arr1=[0,4,8,10], arr2=[2,3,5,7,9]
//                       output --> [0,2,3,4,5,7,8,9,10]

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  if (arr1.length == 0) {
    return arr2;
  }

  if (arr2.length == 0) {
    return arr1;
  }
  const mergedArray: number[] = [];
  let i = 1;
  let j = 1;
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

// using array methods and es6 syntax
function mergeSortedArrays2(arr1: number[], arr2: number[]): number[] {
  if (arr1.length == 0) {
    return arr2;
  }
  if (arr2.length == 0) {
    return arr1;
  }
  const mergedArray: number[] = [...arr1, ...arr2];
  return mergedArray.sort((a, b) => a - b);
}

// bonus
// sort array in ascending or descending
function mergeArrayAndSort(arr1: number[], arr2: number[], descending = false): number[] {
  if (arr1.length == 0) {
    return arr2;
  }
  if (arr2.length == 0) {
    return arr1;
  }
  return [...arr1, ...arr2].sort((a, b) => (!descending ? a - b : b - a));
}

console.log(mergeSortedArrays([0, 4, 8, 10], [2, 3, 5, 7, 9]));
console.log(mergeSortedArrays2([0, 4, 8, 10], [2, 3, 5, 7, 9]));

// sort result in ascending
console.log(mergeArrayAndSort([0, 10, 4, 8], [5, 7, 2, 3, 9]));
// sort result in descending
console.log(mergeArrayAndSort([0, 10, 4, 8], [5, 7, 2, 3, 9], true));

// run --> deno run .\Data-structures\Arrays\merge-sorted-array.ts
// ts-node .\Data-structures\Arrays\merge-sorted-array.ts
