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
    this.length++
    const n = { value: item } as Node<T>
    if (!this.tail || !this.head) {
      this.head = this.tail = n
      return
    }
    // keby si toto nedal tak stratis data.. prepises ich
    this.tail.next = n
    // az ked pripojis dasiu node, tak az postom updatujes pointer na tail
    this.tail = n


  }
  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.length--
    const h = this.head
    this.head = this.head.next
    h.next = undefined
    return h.value

  }
  peek(): T | undefined {
    return this.head?.value
  }
}
