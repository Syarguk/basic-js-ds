const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  constructor(){
      this.head = null;
  }

  getUnderlyingList() {
    let arr = [];
    let tmp = this.head;
    while(tmp){
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    let head = new ListNode(arr[0]);
    let curr = head;
    for(let i = 1; i < arr.length; i++){
        head = new ListNode(arr[i]);
        head.next = curr;
        curr = head;
    }
    return head;
  }

  enqueue( value ) {
    if(this.head){
        let current = this.head;
        this.head = new ListNode(value);
        this.head.next = current;
    } else {
        this.head = new ListNode(value);
    }
  }

  dequeue() {
    if(!this.head) { return; }
    else {
        let prev = null;
        let current = this.head;
        while(current.next){
            prev = current;
            current = current.next;
        }
        prev.next = null;
        return current.value;
    }
  }
}

module.exports = {
  Queue
};
