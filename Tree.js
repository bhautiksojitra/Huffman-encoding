
class Tree {

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
        if (leftTree instanceof Tree && rightTree instanceof Tree) {
            resultTree = new Tree(null, leftTree.#weight + rightTree.#weight);
            resultTree.#leftSubTree = leftTree;
            resultTree.#rightSubTree = rightTree;
        }
        else {
            throw new Error("Can't combine diffrent Objects together ");
        }
        return resultTree;
    }

    compareTo(otherTree) {
        let returnVal;
        if (otherTree.#weight < this.#weight)
            returnVal = 1;
        else if (otherTree.#weight > this.#weight)
            returnVal = -1
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
            console.log(minCharLeft, minCharRight);
            if (minCharLeft <= minCharRight)
                return minCharLeft;
            else
                return minCharRight;
        }

        return tree.#charValue;

    }

}

module.exports = Tree;