// sample implementation of hashtable (actual hastables are lot more complicated than this)

// custable hastable which accepts Key type(string here) and value as custom type
class GenericHashTable<K extends string, V> {
  private data: Array<Array<keyValuePair<K, V>>>;
  private size: number;
  constructor(size: number) {
    this.data = new Array(size);
    this.size = size;
  }

  private _hash(key: K) {
    const keyStr = key + "";
    let hash = 0;
    for (let i = 0; i < keyStr.length; i++) {
      hash = (hash + keyStr.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key: K, value: V) {
    const hashedKey = this._hash(key);
    if (!this.data[hashedKey]) {
      this.data[hashedKey] = [];
    }
    this.data[hashedKey].push({ key: key, value: value });
    return this.data;
  }

  get(key: K) {
    const hashedKey = this._hash(key);
    const currentBucket = this.data[hashedKey];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i].key === key) {
          return currentBucket[i].value;
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray: Array<K> = [];
    if (!this.size) {
      return keysArray;
    }
    for (let i = 0; i < this.size; i++) {
      if (!!this.data[i] && this.data[i].length) {
        for (const keyValuePair of this.data[i]) {
          keysArray.push(keyValuePair.key);
        }
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray: Array<V> = [];
    if (!this.size) {
      return valuesArray;
    }
    for (let i = 0; i < this.size; i++) {
      if (!!this.data[i] && this.data[i].length) {
        for (const keyValuePair of this.data[i]) {
          valuesArray.push(keyValuePair.value);
        }
      }
    }
    return valuesArray;
  }

  entries() {
    const keyValuePairAsArray: Array<[K, V]> = [];
    if (!this.size) {
      return keyValuePairAsArray;
    }
    for (let i = 0; i < this.size; i++) {
      if (!!this.data[i] && this.data[i].length) {
        for (const keyValuePair of this.data[i]) {
          keyValuePairAsArray.push([keyValuePair.key, keyValuePair.value]);
        }
      }
    }
    return keyValuePairAsArray;
  }

  hasKey(key: K) {
    if (!this.size) {
      return false;
    }
    const hashedKey = this._hash(key);
    const currentBucket = this.data[hashedKey];
    return !!currentBucket;
  }
}
// interface to strore each record
interface keyValuePair<K, V> {
  key: K;
  value: V;
}

/*
--------------------------------Test program------------------------------------
*/

const myGenericHashTable = new GenericHashTable<string, string | number>(50);
myGenericHashTable.set("grapes", 10000);
console.log(myGenericHashTable.get("grapes"));
myGenericHashTable.set("apples", 9);
myGenericHashTable.set("oranges", 10);
myGenericHashTable.set("banana", 10);
myGenericHashTable.set("mango", 10);
myGenericHashTable.get("apples");
console.log(myGenericHashTable.values());
for (const [key, value] of myGenericHashTable.entries()) {
  console.log(key + " : " + value);
}
console.log("grapes : ", myGenericHashTable.hasKey("grapes"));

// run --> deno run .\Data-structures\Hash-table\custom-generic-hash-table.ts
// ts-node --> ts-node .\Data-structures\Hash-table\custom-generic-hash-table.ts
