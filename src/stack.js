const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  arr = Array();
  lastElement;

  push(element) {
    this.arr[this.arr.length] = element;
    this.lastElement = element;
  }

  pop() {
    if(this.arr[this.arr.length - 1]) {
      this.arr.length = this.arr.length - 1;
      return this.lastElement;
    }
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

module.exports = {
  Stack
};
