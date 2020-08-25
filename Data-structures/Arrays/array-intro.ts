// string array

const introArray: string[] = ["z", "y", "x", "w"];

// operations on array: insert --> O(n), delete --> O(n), search --> O(1), traversal --> o(1)

// 1. inserting element at end (after last element)
introArray.push("push"); // ["z", "y", "x", "w","push"]

// 2. deleting last element
introArray.pop(); // ["z", "y", "x", "w"]
introArray.pop(); // ["z", "y", "x"]

// 3. inserting before first element (will be inserted at first position and other element of array will be shift to right)
introArray.unshift("unshift"); // ["unshift", "z", "y", "x"]

// 4. delete element at first position and shift other element towards left/start of array
introArray.shift(); // ["z", "y", "x"]

// 4. inserting/deleting at given position
introArray.splice(1, 0, "insert element at index 1");
// ["z","insert element at index 1", "y", "x"]

// delete element present at index 2
introArray.splice(2, 1); // ["z","insert element at index 1", "x"]

console.log(introArray); // ["z","insert element at index 1", "x"]

// run --> deno run .\Data-structures\Arrays\array-intro.ts
// ts-node .\Data-structures\Arrays\array-intro.ts
