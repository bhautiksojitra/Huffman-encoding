let fs = require('fs');
let Dictionary = require('./Dictionary.js');
let StringHash = require('./StringHash.js');
let HuffmanTree = require('./HuffmanTree.js');

class HuffmanEncode {

    #file
    constructor(fileName) {
        this.#file = fileName;
    }

    encode() {

        let fileData = fs.readFileSync(this.#file, "utf8");
        let hashTable = new Dictionary(1);

        for (let i = 0; i < fileData.length; i++) {

            let newKey = new StringHash(fileData[i]);
            let charPercentage = 1 / fileData.length;

            if (!hashTable.contains(newKey))
                hashTable.put(newKey, charPercentage);
            else
                hashTable.put(newKey, hashTable.get(newKey) + charPercentage);

        }

        let size = Math.min(fileData.length, 256);

        let huffmanTrees = new Array(size);
        let index = 0;

        for (let i = 0; i < fileData.length; i++) {
            if (!this.contains(huffmanTrees, index, fileData[i]))
                huffmanTrees[index++] = new HuffmanTree(fileData[i], hashTable.get(new StringHash(fileData[i])));

        }

        huffmanTrees.length = index;

        for (let i = 0; i < huffmanTrees.length; i++)
            console.log(huffmanTrees[i].getChar() + " " + huffmanTrees[i].getWeight());

        while (huffmanTrees.length > 1) {
            huffmanTrees.sort(function (a, b) { return a.compareTo(b) });

            let tree1 = huffmanTrees.shift();
            let tree2 = huffmanTrees.shift();



            tree1 = tree1.combine(tree1, tree2);

            huffmanTrees.push(tree1);

        }

        let binaryDict = new Dictionary(1);

        this.pathToBinary(huffmanTrees[0], "", binaryDict);

        binaryDict.printData();

        fs.writeFileSync(this.#file + ".huff", "");

        for (let i = 0; i < fileData.length; i++) {
            fs.appendFileSync(this.#file + ".huff", binaryDict.get(new StringHash(fileData[i])) + " ");
        }

        fs.appendFileSync(this.#file + ".huff", "\n");


    }

    contains(setOfTrees, size, key) {
        for (let i = 0; i < size; i++) {
            if (key === setOfTrees[i].getChar())
                return true;
        }

        return false;
    }


    pathToBinary(tree, binaryCode, list) {

        if (tree.getLeft() !== null)
            this.pathToBinary(tree.getLeft(), binaryCode + "0", list);
        if (tree.getRight() !== null)
            this.pathToBinary(tree.getRight(), binaryCode + "1", list);

        if (tree.getLeft() === null && tree.getRight() === null) {
            let key = new StringHash(tree.getChar());
            list.put(key, binaryCode);
        }

    }

}

module.exports = HuffmanEncode;
