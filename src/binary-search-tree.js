const {
  NotImplementedError
} = require('../extensions/index.js');

//const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;

  }
}

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {

    const node = new Node(data);

    if (!this.rootTree) {

      this.rootTree = node;

    } else {

      let itemNode = this.rootTree;

      while (itemNode) {
        if (node.data < itemNode.data) {
          if (!itemNode.left) {
            itemNode.left = node;
            return;
          }

          itemNode = itemNode.left;
        } else {
          if (!itemNode.right) {

            itemNode.right = node;
            return;
          }

          itemNode = itemNode.right;
        }
      }
    }

  }

  has(data) {
    return In(this.rootTree, data);

    function In(node, data) {
      if (node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return In(node.left, data);
      } else {
        return In(node.right, data);
      }


    }
  }

  find(data) {
    return In(this.rootTree, data);

    function In(node, data) {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return In(node.left, data);
      } else {
        return In(node.right, data);
      }
    }
  }
  remove(data) {
    this.rootTree = delNode(this.rootTree, data);

    function delNode(node, data) {
      if (node === null) {
        return null;
      }

      if (data < node.data) {

        node.left = delNode(node.left, data);
        return node;

      } else if (node.data < data) {

        node.right = delNode(node.right, data);
        return node;

      } else {

        if (node.left === null && node.right === null) {
          return null;

        }

        if (node.left === null) {

          node = node.right;
          return node;

        }

        if (node.right === null) {

          node = node.left;
          return node;

        }

        let minRight = node.right;

        while (minRight.left) {

          minRight = minRight.left;

        }

        node.data = minRight.data;

        node.right = delNode(node.right, minRight.data);

        return node;
      }
    }
  }
  min() {
    if (!this.rootTree) {
      return;
    }

    let nodeMin = this.rootTree;

    while (nodeMin.left) {

      nodeMin = nodeMin.left;

    }

    return nodeMin.data;
  }

  max() {
    if (!this.rootTree) {
      return;
    }

    let nodeMax = this.rootTree;

    while (nodeMax.right) {

      nodeMax = nodeMax.right;

    }

    return nodeMax.data;
  }
}

module.exports = {
  BinarySearchTree
};