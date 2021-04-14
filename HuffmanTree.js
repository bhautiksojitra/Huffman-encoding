'use strict'

class HuffmanTree {

    #weight
    #charValue;
    #leftSubTree
    #rightSubTree
    constructor(singleChar, weight) {
        this.#charValue = singleChar;
        this.#weight = weight;
        this.#leftSubTree = null;
        this.#rightSubTree = null;
    }

    combine(leftTree, rightTree) {
        let resultTree;
        if (leftTree instanceof HuffmanTree && rightTree instanceof HuffmanTree) {
            resultTree = new HuffmanTree(null, leftTree.#weight + rightTree.#weight);
            resultTree.#leftSubTree = leftTree;
            resultTree.#rightSubTree = rightTree;
        }
        else {
            resultTree = null;
        }
        return resultTree;
    }

    compareTo(otherTree) {
        let returnVal;
        if (Math.abs(otherTree.#weight - this.#weight) > Math.pow(10, -12)) {
            if (otherTree.#weight - this.#weight > 0)
                returnVal = -1
            else if (otherTree.#weight - this.#weight < 0)
                returnVal = 1;
        }
        else {
            let minCharOther = this.recursiveHelper(otherTree);
            let minCharThis = this.recursiveHelper(this);

            if (minCharOther < minCharThis)
                returnVal = 1;
            else if (minCharOther > minCharThis)
                returnVal = -1;
            else
                returnVal = 0;
        }

        return returnVal;

    }

    recursiveHelper(tree) {
        if (tree.#charValue === null) {
            let minCharLeft = this.recursiveHelper(tree.#leftSubTree);
            let minCharRight = this.recursiveHelper(tree.#rightSubTree);

            if (minCharLeft <= minCharRight)
                return minCharLeft;
            else
                return minCharRight;
        }

        return tree.#charValue;

    }


    increaseWeight(value) {
        this.#weight = this.#weight + value;
    }

    getChar() {
        return this.#charValue;
    }

    getWeight() {
        return this.#weight;
    }

    getLeft() {
        return this.#leftSubTree;
    }

    getRight() {
        return this.#rightSubTree;
    }



}

module.exports = HuffmanTree;