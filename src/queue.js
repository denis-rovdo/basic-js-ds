const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  ListNode
} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueHead = null;

  }

  getUnderlyingList() {
    if (this.queueHead === null) {
      return null;
    } else {
      return this.queueHead;
    }
  }

  enqueue(value) {

    if (this.queueHead === null) {

      this.queueHead = new ListNode(value);

    } else {

      let addInQueue = this.queueHead;

      while (addInQueue.next !== null) {

        addInQueue = addInQueue.next;

      }

      addInQueue.next = new ListNode(value);
    }




  }

  /* enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode(value);
    } else {
      this.getLastNode().next = new ListNode(value)
    }
  }
  
  getLastNode() {
    let cur = this.head;
    while (cur.next !== null){
      cur = cur.next;
    }      
    return cur;
  } */

  dequeue() {
    let delet = this.queueHead.value;
    this.queueHead = this.queueHead.next;
    return delet;
  }
}

module.exports = {
  Queue
};