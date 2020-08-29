// sample implementation of hashtable (actual hastables are lot more complicated than this)
// custable hastable which uses string as key and string/number as value
class HashTable {
  private data: Array<Array<keyValuePair<string, string | number>>>;
  private size: number;
  constructor(size: number) {
    this.data = new Array(size);
    this.size = size;
  }

  private _hash(key: string) {
    const keyStr = key + "";
    let hash = 0;
    for (let i = 0; i < keyStr.length; i++) {
      hash = (hash + keyStr.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key: string, value: string | number) {
    const hashedKey = this._hash(key);
    if (!this.data[hashedKey]) {
      this.data[hashedKey] = [];
    }
    this.data[hashedKey].push({ key, value });
    return this.data;
  }

  get(key: string) {
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
    const keysArray: Array<string> = [];
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
    const valuesArray: Array<string | number> = [];
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
    const keyValuePairAsArray: Array<[string, string | number]> = [];
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

  hasKey(key: string) {
    if (!this.size) {
      return false;
    }
    for (let i = 0; i < this.size; i++) {
      if (!!this.data[i] && this.data[i].length) {
        for (const keyValuePair of this.data[i]) {
          if (keyValuePair.key == key) {
            return true;
          }
        }
      }
    }
    return false;
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

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
myHashTable.set("oranges", 10);
myHashTable.set("banana", 10);
myHashTable.set("mango", 10);
myHashTable.get("apples");
console.log(myHashTable.values());
for (const [key, value] of myHashTable.entries()) {
  console.log(key + " : " + value);
}
console.log("grapes : ", myHashTable.hasKey("gpes"));

// run --> deno run .\Data-structures\Hash-table\custom-hash-table.ts
// run --> ts-node .\Data-structures\Hash-table\custom-hash-table.ts
