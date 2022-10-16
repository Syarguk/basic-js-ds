const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){ this.root1 = null; }

  root() {
    return this.root1;
  }

  add(data) {
    this.root1 = addNode(this.root1, data);
    function addNode(node, value){
        if(!node){ return new Node(value); }
        if(node.data === value){ return node; }
        if(value < node.data){
            node.left = addNode(node.left, value);
        } else {
            node.right = addNode(node.right, value);
        }
        return node;
    }
  }

  has(data) {
    return searchData(this.root1, data);
    function searchData(node, value){
        if(!node){ return false; }
        if(node.data === value){ return true; }
        if(value < node.data){
            return searchData(node.left, value);
        } else {
            return searchData(node.right, value);
        }
    }
  }

  find(data) {
    return findData(this.root1, data);
    function findData(node, value){
        if(!node){ return null; }
        if(node.data === value){ return node; }
        if(value < node.data){
            return findData(node.left, value);
        } else {
            return findData(node.right, value);
        }
    }
  }

  remove(data) {
    this.root1 = removeData(this.root1, data);
    function removeData(node, value){
        if(!node){ return null; }
        if(value < node.data){
            node.left = removeData(node.left, value);
            return node;
        } else if(value > node.data){
            node.right = removeData(node.right, value);
            return node;
        } else {
            if(!node.left && !node.right){ return null; }
            if(!node.left){
                node = node.right;
                return node;
            }
            if(!node.right){
                node = node.left;
                return node;
            }
            let minFromRight = node.right;
            while(minFromRight.left){
                minFromRight = minFromRight.left;
            }
            node.data = minFromRight.data;
            node.right = removeData(node.right, minFromRight.data);
            return node;
        }
    }
  }

  min() {
    if(!this.root1){ return null; }
    let node = this.root1;
    while(node.left){
        node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.root1){ return null; }
    let node = this.root1;
    while(node.right){
        node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};