type Node<T> = {
  value: T,
  next?: Node<T>,
}
export default class Queue<T> {
  public length: number;
  private head: Node<T> | undefined
  private tail?: Node<T>


  constructor() {
    this.head = this.tail = undefined;
    this.length = 0
  }

  enqueue(item: T): void {

  }
  deque(): T | undefined {

  }
  peek(): T | undefined {

  }
}
