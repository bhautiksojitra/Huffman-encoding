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



    hashTable.printData();
    size = Math.min(contents.length, 256);

    let huffmanTrees = new Array(size);
    let j = 0;

    for (let i = 0; i < contents.length; i++) {
        if (!contains(huffmanTrees, contents[i])) {
            huffmanTrees[j++] = new Tree(contents[i], hashTable.get(new StringHash(contents[i])));
        }
    }

    for (let i = 0; i < j; i++)
        console.log(huffmanTrees[i].getChar() + " " + huffmanTrees[i].getWeight());


}

function contains(setOfTrees, size, key) {
    for (let i = 0; i < size; i++) {
        if (key === setOfTrees[i].getChar())
            return true;
    }

    return false;
}



main();