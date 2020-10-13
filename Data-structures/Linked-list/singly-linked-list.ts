// write custom linked list using js object and class syntax

// import type { INode } from "./node-type.ts"; // comment when using ts-node
import { INode } from "./node-type"; // uncomment when using deno

class LinkedList<T> {
  private head: INode<T>;
  private tail: INode<T>;
  public size: number;
  constructor(data: T) {
    const newNode = this.createNode(data);
    this.head = newNode;
    this.tail = newNode;
    this.size = 1;
  }

  append(data: T) {
    // add data after tail
    const newNode = this.createNode(data);
    this.appendToTheEndOfTheList(newNode);
    this.size++;
    return this.toArray();
  }

  prepend(data: T) {
    const newNode = this.createNode(data);
    this.prependToStartOfTheList(newNode);
    this.size++;
    return this.toArray();
  }

  insert(index: number, data: T) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (index == 0) {
      // prepend
      return this.prepend(data);
    }
    if (index == this.size) {
      //append
      return this.append(data);
    }
    const newNode = this.createNode(data);

    // leader node is index-1 th element
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingPointer = leaderNode.next; //-> *(--)*
    leaderNode.next = newNode;
    newNode.next = holdingPointer;
    this.size++;
    return this.toArray();
  }

  deleteNode(index: number) {
    if (index < 0 || index >= this.size) {
      return undefined;
    }
    if (index == 0) {
      this.head = this.head.next as INode<T>;
      this.size--;
      return this.toArray();
    }
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next as INode<T>;
    leaderNode.next = unwantedNode.next;
    this.size--;
    return this.toArray();
  }

  toArray(): T[] {
    const result: T[] = [];
    let node = this.head;
    while (node) {
      result.push(node.data);
      node = node.next as INode<T>;
    }
    return result;
  }

  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.toArray();
  }

  private createNode(data: T): INode<T> {
    return { data: data };
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
// console.log(numberLinkedList.size); // 6
// console.log(numberLinkedList.deleteNode(5)); // [ 100, 1, 10, 200, 5 ]

const stringLinkedList = new LinkedList<string>("pikachu");
console.log(stringLinkedList); //  LinkedList { head: { data: "pikachu" }, tail: { data: "pikachu" }, size: 1 }
console.log(stringLinkedList.append("balbasaur")); // [ "pikachu", "balbasaur" ]
console.log(stringLinkedList.prepend("charmender")); //  [ "charmender", "pikachu", "balbasaur" ]
console.log(stringLinkedList.insert(2, "charizard")); //  [ "charmender", "pikachu", "charizard", "balbasaur" ]
console.log(stringLinkedList.insert(2, "squirtle")); //  [ "charmender", "pikachu", "squirtle", "charizard", "balbasaur" ]
console.log(stringLinkedList.size); //  5
console.log(stringLinkedList.deleteNode(3)); //  [ "charmender", "pikachu", "squirtle", "balbasaur" ]
console.log(stringLinkedList.reverse()); //  [ 'balbasaur', 'squirtle', 'pikachu', 'charmender' ]

// run  --> ts-node .\Data-structures\Linked-list\singly-linked-list.ts
// run  --> deno run .\Data-structures\Linked-list\singly-linked-list.ts
