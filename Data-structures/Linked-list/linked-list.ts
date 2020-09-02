// write custom linked list using js object and class syntax

interface INode<T> {
  value: T;
  next?: INode<T>;
}

class LinkedList<T> {
  private head: INode<T>;
  private tail: INode<T>;
  public length: number;
  constructor(value: T) {
    const newNode = this.createNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  append(value: T) {
    // add value after tail
    const newNode = this.createNode(value);
    this.appendToTheEndOfTheList(newNode);
    this.length++;
    return this.toArray();
  }

  prepend(value: T) {
    const newNode = this.createNode(value);
    this.prependToStartOfTheList(newNode);
    this.length++;
    return this.toArray();
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index == 0) {
      // prepend
      return this.prepend(value);
    }
    if (index == this.length) {
      //append
      return this.append(value);
    }
    const newNode = this.createNode(value);

    // leader node is index-1 th element
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingPointer = leaderNode.next; //-> *(--)*
    leaderNode.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.toArray();
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index == 0) {
      this.head = this.head.next as INode<T>;
      this.length--;
      return this.toArray();
    }
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next as INode<T>;
    leaderNode.next = unwantedNode.next;
    this.length--;
    return this.toArray();
  }

  toArray(): T[] {
    const result: T[] = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next as INode<T>;
    }
    return result;
  }

  private createNode(value: T): INode<T> {
    return { value: value };
  }

  private appendToTheEndOfTheList(node: INode<T>) {
    this.tail.next = node;
    this.tail = node;
  }

  private prependToStartOfTheList(node: INode<T>) {
    node.next = this.head;
    this.head = node;
  }

  private traverseToIndex(index: number): INode<T> {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex != index) {
      currentNode = currentNode.next as INode<T>;
      currentIndex++;
    }
    return currentNode;
  }
}

/*-----------------------------------------------------------------------------
--------------------------driver program--------------------------------
------------------------------------------------------------------------*/

// const numberLinkedList = new LinkedList<number>(10); // 10  --> null
// console.log(numberLinkedList);
// console.log(numberLinkedList.append(5)); // 10  --> 5 --> null
// console.log(numberLinkedList.append(16)); // 10  --> 5  --> 16  --> null
// console.log(numberLinkedList.prepend(1)); // 1  --> 10  --> 5 --> 16  --> null
// numberLinkedList.insert(2, 200); // 1 --> 10  --> 200 --> 5 --> 16  -->null
// numberLinkedList.insert(0, 100); // 100 --> --> 1 --> 10  --> 200 --> 5 --> 16  -->null
// console.log(numberLinkedList.toArray()); // [ 100, 1, 10, 200, 5, 16 ]
// console.log(numberLinkedList.length); // 6
// console.log(numberLinkedList.remove(5)); // [ 100, 1, 10, 200, 5 ]

const stringLinkedList = new LinkedList<string>("pikachu");
console.log(stringLinkedList); //  LinkedList { head: { value: "pikachu" }, tail: { value: "pikachu" }, length: 1 }
console.log(stringLinkedList.append("balbasaur")); // [ "pikachu", "balbasaur" ]
console.log(stringLinkedList.prepend("charmender")); //  [ "charmender", "pikachu", "balbasaur" ]
console.log(stringLinkedList.insert(2, "charizard")); //  [ "charmender", "pikachu", "charizard", "balbasaur" ]
console.log(stringLinkedList.insert(2, "squirtle")); //  [ "charmender", "pikachu", "squirtle", "charizard", "balbasaur" ]
console.log(stringLinkedList.length); //  5
console.log(stringLinkedList.remove(3)); //  [ "charmender", "pikachu", "squirtle", "balbasaur" ]

// run  --> ts-node .\Data-structures\Linked-list\linked-list.ts
// run  --> deno run .\Data-structures\Linked-list\linked-list.ts
