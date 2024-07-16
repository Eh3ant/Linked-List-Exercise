/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return null;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return null;

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null
    }
    return currentHead.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Index out of bound')
    }
    let current = this.head;
    let count = 0

    while (count < idx) {
      current = current.next;
      count++;
    }
    return current.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Index out of bound')
    }
    let current = this.head;
    let count = 0

    while (count < idx) {
      current = current.next;
      count++;
    }
    current.val = val

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Index out of bound')
    }
    const newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode;
    } else if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let count = 0;

      while (count < idx - 1) {
        current = current.next;
        count++
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index out of bounds');
    }

    let removedValue;
    if (idx === 0) {
      removedValue = this.head.val;
      this.head = this.head.next;
      if (this.length === 1) this.tail = null;
    } else {
      let current = this.head;
      let count = 0;

      while (count < idx - 1) {
        current = current.next;
        count++;
      }

      removedValue = current.next.val;
      current.next = current.next.next;
      if (idx === this.length - 1) this.tail = current;
    }

    this.length--;
    return removedValue;

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;

  }
}

module.exports = LinkedList;
