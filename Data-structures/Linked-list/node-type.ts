export interface INode<T> {
  data: T;
  next?: INode<T> | null;
}

export class Node<T> {
  next: Node<T> | null = null;
  prev: Node<T> | null = null;
  constructor(public data: T) {}
}

export interface ILinkedList<T> {
  prepend(data: T): T[];
  append(data: T): T[];
  insert(index: number, data: T): T[] | undefined;
  deleteNode?(node: Node<T>): T[] | undefined;
  removeNode(index: number): T[] | undefined;
  toArray(): T[];
  toReversedArray(): T[];
  size: number;
  // search(comparator: (data: T) => boolean): T[] | null;
}
