type ArrayType<T> = { [key: number]: T }; // custom array type, so we can use obj[key] syntax

// custom array which stores string or number
class MyArray {
  private length: number;
  private data: ArrayType<string | number>;
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // push
  push(item: string | number): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // pop
  pop(): string | number | undefined {
    if (this.length == 0) {
      return undefined;
    }
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // delete item at index
  delete(index: number): string | number | undefined {
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
  insert(index: number, item: string | number): number | undefined {
    if (index < 0 || (0 < index && index > this.length - 1)) {
      return undefined;
    }
    this.shiftItemsToRight(index, item);
    return this.length;
  }

  // call in case of insert
  private shiftItemsToRight(insertIndex: number, item: string | number) {
    for (let i = insertIndex; i < this.length; i++) {
      this.data[i + 1] = this.data[i];
    }
    this.data[insertIndex] = item;
    this.length++;
  }
}

const arr = new MyArray();
arr.push(100);
arr.push("first string");
arr.push("third");
arr.push("second");
arr.pop();
arr.push(200);
arr.push("fourth");
arr.delete(0);
console.log(arr);
arr.insert(2, "fifth");
console.log(arr);

// run using deno --> deno run .\Data-structures\Arrays\custom-array.ts
// ts-node --> ts-node .\Data-structures\Arrays\custom-array.ts
