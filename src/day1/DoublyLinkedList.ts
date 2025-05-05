type Node<T> = {
  value: T,
  prev?: Node<T>,
  next?: Node<T>,
}
export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  prepend(item: T): void {
    this.length++
    const node = { value: item } as Node<T>

    if (!this.head) {
      this.head = this.tail = node
      return
    }
    node.next = this.head
    this.head.prev = node
    this.head = node

  }

  insertAt(item: T, idx: number): void {
    const node = { value: item } as Node<T>
    if (idx > this.length) {
      throw new Error("fack!!")
    }
    if (idx == this.length) {
      this.append(item)
      return
    } else if (idx == 0) {
      this.prepend(node.value)
      return
    }

    // NOTE: az sem lebo append a preppend are incrementing len
    this.length++
    const curr = this.getAt(idx) as Node<T>
    node.next = curr
    node.prev = curr.prev
    curr.prev = node
    if (node.prev) {
      curr.prev.next = node
      //alebo 
      //node.prev.next = node
    }

  }

  append(item: T): void {
    this.length++
    const node = { value: item } as Node<T>
    if (!this.tail) {
      this.tail = this.head = node
      return
    }
    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  remove(item: T): T | undefined {
    let curr = this.head
    for (let i = 0; curr && i < this.length; ++i) {
      if (curr.value == item) {
        break
      }
      curr = curr.next
    }

    if (!curr) {
      return undefined
    }

    return this.removeNode(curr)
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx)

    this.debug(idx)
    if (!node) {
      return undefined
    }
    return this.removeNode(node)
  }

  private removeNode(curr: Node<T>): T | undefined {
    this.length--

    if (this.length == 0) {
      const out = this.head?.value
      this.tail = this.head = undefined
      return out
    }

    //prelikujes
    if (curr.prev) {
      curr.prev.next = curr.next
    }

    if (curr.next) {
      curr.next.prev = curr.prev
    }

    //ak mazem head
    if (curr === this.head) {
      this.head = curr.next
    }

    //or tail
    if (curr === this.tail) {
      this.tail = curr.prev
    }
    curr.next = curr.prev = undefined

    return curr.value
  }

  private debug(idx: number) {
    let curr = this.head
    let out = ''
    for (let i = 0; curr && i < idx; ++i) {
      out += `${i} => ${curr.value}`
      curr = curr.next
    }
    console.log(curr)
  }
  private getAt(idx: number): Node<T> | undefined {

    let curr = this.head
    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next
    }
    return curr
  }
}
