/*-------------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : HuffmanTree

    Purpose    : creates the tree with left and right sub tree pointer 
                 and with the data

---------------------------------------------------*/
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

    // combine two trees and retuns the new one
    combine(tree1, tree2) {

        let resultTree = null;


        if (tree1 instanceof HuffmanTree && tree2 instanceof HuffmanTree) {
            resultTree = new HuffmanTree(null, tree1.#weight + tree2.#weight);
            resultTree.#leftSubTree = tree1;
            resultTree.#rightSubTree = tree2;
        }

        return resultTree;
    }

    // compare two trees
    compareTo(otherTree) {
        let returnVal;
        if (Math.abs(otherTree.#weight - this.#weight) > Math.pow(10, -12)) {
            if (otherTree.#weight - this.#weight > 0)
                returnVal = -1
            else if (otherTree.#weight - this.#weight < 0)
                returnVal = 1;
        }// based on the weight
        else {
            let minCharOther = this.recursiveHelper(otherTree);
            let minCharThis = this.recursiveHelper(this);

            if (minCharOther < minCharThis)
                returnVal = 1;
            else if (minCharOther > minCharThis)
                returnVal = -1;
            else
                returnVal = 0;
        } // if weights are same (check the smallest char)

        return returnVal;

    }

    // helpful to get the minimum char of the tree 
    recursiveHelper(tree) {

        if (tree.#charValue === null) {

            // recursively checks both the sub trees and get the min char
            let minCharLeft = this.recursiveHelper(tree.#leftSubTree);
            let minCharRight = this.recursiveHelper(tree.#rightSubTree);

            if (minCharLeft <= minCharRight)
                return minCharLeft;
            else
                return minCharRight;
        }//if the tree is not the leaf

        return tree.#charValue; // if tree is leaf should contain char value

    }

    //some useful getter methods
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