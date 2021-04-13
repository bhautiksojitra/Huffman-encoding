let fs = require('fs');
let Dictionary = require('./Dictionary.js');
const StringHash = require('./StringHash.js');
const Tree = require('./Tree.js');

function main() {

    let contents = fs.readFileSync("inputData.txt", "utf8");

    let hashTable = new Dictionary(1);

    for (let i = 0; i < contents.length; i++) {
        let newKey = new StringHash(contents[i]);
        let weight = 1 / contents.length;
        if (!hashTable.contains(newKey)) {
            hashTable.put(newKey, weight);
        }
        else {
            hashTable.put(newKey, hashTable.get(newKey) + weight);

        }


    }



    // hashTable.printData();
    size = Math.min(contents.length, 256);

    let huffmanTrees = new Array(size);
    let j = 0;

    for (let i = 0; i < contents.length; i++) {
        if (!contains(huffmanTrees, j, contents[i])) {
            huffmanTrees[j++] = new Tree(contents[i], hashTable.get(new StringHash(contents[i])));
        }
    }

    huffmanTrees.length = j;

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

    binaryEncoding(huffmanTrees[0], "", binaryDict);

    binaryDict.printData();

    fs.writeFileSync("output.txt", "");

    for (let i = 0; i < contents.length; i++) {
        fs.appendFileSync("output.txt", binaryDict.get(new StringHash(contents[i])) + " ");
    }


}

function contains(setOfTrees, size, key) {
    for (let i = 0; i < size; i++) {
        if (key === setOfTrees[i].getChar())
            return true;
    }

    return false;
}


function binaryEncoding(tree, str, list) {

    if (tree.getLeft() === null && tree.getRight() === null) {
        list.put(new StringHash(tree.getChar()), str);
    }


    if (tree.getLeft() !== null)
        binaryEncoding(tree.getLeft(), str + "0", list);
    if (tree.getRight() !== null)
        binaryEncoding(tree.getRight(), str + "1", list);


}


main();