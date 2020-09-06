// write custom linked list using js object and class syntax

// deno imports
// import { Node, ILinkedList } from "./node-type.ts"; // comment when using ts-node

// ts-node imports
import { ILinkedList, Node } from "./node-type"; // uncomment when using ts-node

class DoublyLinkedList<T> implements ILinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;
  public size: number;
  constructor(data: T) {
    const newNode = new Node(data);
    this.head = newNode;
    this.tail = newNode;
    this.size = 1;
  }

  append(data: T) {
    // add data after tail
    const newNode = new Node(data);
    this.appendToTheEndOfTheList(newNode);
    this.size++;
    return this.toArray();
  }

  prepend(data: T) {
    const newNode = new Node(data);
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
    const newNode = new Node(data);

    // leader node is index-1 th element
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingPointer = leaderNode.next as Node<T>; //-> *(--)*
    // set new node next to holding pointer next and prev to leadernode
    newNode.prev = leaderNode;
    newNode.next = holdingPointer;
    // set leader node next to new node
    leaderNode.next = newNode;
    // set holding pointer prev to newnode
    holdingPointer.prev = newNode;
    this.size++;
    return this.toArray();
  }

  removeNode(index: number) {
    if (index < 0 || index >= this.size) {
      return undefined;
    }
    if (index == 0) {
      this.head = this.head.next as Node<T>;
      this.head.prev = null;
      this.size--;
      return this.toArray();
    }
    if (index == this.size - 1) {
      this.tail = this.tail.prev as Node<T>;
      this.tail.next = null;
      this.size--;
      return this.toArray();
    }
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next as Node<T>;
    leaderNode.next = unwantedNode.next;
    if (leaderNode.next != null) {
      leaderNode.next.prev = leaderNode;
    }
    this.size--;
    return this.toArray();
  }

  toArray(): T[] {
    const result: T[] = [];
    let node = this.head;
    while (node) {
      result.push(node.data);
      node = node.next as Node<T>;
    }
    return result;
  }

  private appendToTheEndOfTheList(node: Node<T>) {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  private prependToStartOfTheList(node: Node<T>) {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  private traverseToIndex(index: number): Node<T> {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex != index) {
      currentNode = currentNode.next as Node<T>;
      currentIndex++;
    }
    return currentNode;
  }
}

/*-----------------------------------------------------------------------------
--------------------------driver program--------------------------------
------------------------------------------------------------------------*/

const numberLinkedList = new DoublyLinkedList<number>(10); // 10  --> null
console.log(numberLinkedList);
console.log(numberLinkedList.append(5)); // 10  --> 5 --> null
console.log(numberLinkedList.append(16)); // 10  --> 5  --> 16  --> null
console.log(numberLinkedList.prepend(1)); // 1  --> 10  --> 5 --> 16  --> null
console.log(numberLinkedList.insert(2, 200)); // 1 --> 10  --> 200 --> 5 --> 16  -->null
numberLinkedList.insert(0, 100); // 100 --> --> 1 --> 10  --> 200 --> 5 --> 16  -->null
console.log(numberLinkedList.toArray()); // [ 100, 1, 10, 200, 5, 16 ]
console.log(numberLinkedList.size); // 6
console.log(numberLinkedList.removeNode(5)); // [ 100, 1, 10, 200, 5 ]

// const stringLinkedList = new DoublyLinkedList<string>("pikachu");
// console.log(stringLinkedList); //  LinkedList { head: { data: "pikachu" }, tail: { data: "pikachu" }, size: 1 }
// console.log(stringLinkedList.append("balbasaur")); // [ "pikachu", "balbasaur" ]
// console.log(stringLinkedList.prepend("charmender")); //  [ "charmender", "pikachu", "balbasaur" ]
// console.log(stringLinkedList.insert(2, "charizard")); //  [ "charmender", "pikachu", "charizard", "balbasaur" ]
// console.log(stringLinkedList.insert(2, "squirtle")); //  [ "charmender", "pikachu", "squirtle", "charizard", "balbasaur" ]
// console.log(stringLinkedList.size); //  5
// console.log(stringLinkedList.removeNode(3)); //  [ "charmender", "pikachu", "squirtle", "balbasaur" ]

// run  --> ts-node .\Data-structures\Linked-list\doubly-linked-list.ts
// run  --> deno run .\Data-structures\Linked-list\doubly-linked-list.ts
