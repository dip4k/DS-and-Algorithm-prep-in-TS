type ArrayType<T> = { [key: number]: T }; // custom array type, so we can use obj[key] syntax

// custom array which stores string or number
class MyArray<T> {
  private length: number;
  private data: ArrayType<T>;
  constructor() {
    this.length = 0;
    this.data = Object.create({});
  }

  // get element at index
  get(index: number): T | null {
    if (index < 0) {
      return null;
    }
    return this.data[index];
  }

  // push
  push(item: T): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // pop
  pop(): T | undefined {
    if (this.length == 0) {
      return undefined;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // delete item at index
  delete(index: number): T | undefined {
    if (this.length == 0) {
      return undefined;
    }
    if (index < 0 || (0 < index && index > this.length - 1)) {
      return undefined;
    }
    const deletedItem = this.data[index];
    this.shiftItemsToLeft(index);
    return deletedItem;
  }

  // call in case of delete
  private shiftItemsToLeft(deleteIndex: number) {
    for (let i = deleteIndex; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  // insert item at place
  insert(index: number, item: T): number | undefined {
    if (index < 0 || (0 < index && index > this.length - 1)) {
      return undefined;
    }
    this.shiftItemsToRight(index, item);
    return this.length;
  }

  // call in case of insert
  private shiftItemsToRight(insertIndex: number, item: T) {
    for (let i = insertIndex; i < this.length; i++) {
      this.data[i + 1] = this.data[i];
    }
    this.data[insertIndex] = item;
    this.length++;
  }
}

// use of custom array

const arr = new MyArray<string | number>();
arr.push(100);
arr.push("first string");
arr.push("third");
arr.push("second");
console.log(arr); // MyArray { length: 4, data: { 0: 100, 1: "first string", 2: "third", 3: "second" } }

arr.pop();
console.log(arr); // MyArray { length: 3, data: { 0: 100, 1: "first string", 2: "third" } }

arr.push(200);
arr.push("fourth");
console.log(arr); // MyArray { length: 5, data: { 0: 100, 1: "first string", 2: "third", 3: 200, 4: "fourth" } }

arr.delete(0);
console.log(arr); // MyArray { length: 4, data: { 0: "first string", 1: "third", 2: 200, 3: "fourth" } }
arr.insert(2, "fifth");
console.log(arr); // MyArray { length: 5, data: { 0: "first string", 1: "third", 2: "fifth", 3: 200, 4: 200 } }

console.log(arr.get(2)); // fifth

// run using deno --> deno run .\Data-structures\Arrays\custom-array.ts
// ts-node --> ts-node .\Data-structures\Arrays\custom-array.ts
