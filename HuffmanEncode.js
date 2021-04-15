/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : HuffmanEncode

    Purpose    : reads the file and encode it into binary using Huffman trees

---------------------------------------------*/
let fs = require('fs'); // useful for file reading

let Dictionary = require('./Dictionary.js');
let StringHash = require('./StringHash.js');
let HuffmanTree = require('./HuffmanTree.js');

class HuffmanEncode {

    // stores the file which is being encoded
    #file
    constructor(fileName) {
        this.#file = fileName;
    }

    encode() {

        // reads the entire file and stores it in the string  
        let fileData = fs.readFileSync(this.#file, "utf8");
        let hashTable = new Dictionary(256); // creates the dictionary

        //size of the set of the Huffman Trees 
        let size = Math.min(fileData.length, 256);



        // add values from the file to the Dictionary
        for (let i = 0; i < fileData.length; i++) {

            // creates the new key with the file char
            let newKey = new StringHash(fileData[i]);
            let charPercentage = 1 / fileData.length; // weight of that char

            // if hashtable contains the key then only add the weight
            if (!hashTable.contains(newKey)) {
                hashTable.put(newKey, charPercentage);
            }
            else
                hashTable.put(newKey, hashTable.get(newKey) + charPercentage);


        }

        let huffmanTrees = new Array(size);
        let index = 0;

        for (let i = 0; i < fileData.length; i++) {

            if (!this.contains(huffmanTrees, index, fileData[i]))
                huffmanTrees[index++] = new HuffmanTree(fileData[i], hashTable.get(new StringHash(fileData[i])));

        }



        // change the length of the array
        huffmanTrees.length = index;

        // combine all the trees until there is only one tree left 
        while (huffmanTrees.length > 1) {

            //sort the array
            huffmanTrees.sort(function (a, b) { return a.compareTo(b) });

            // remove the first 2 smallest trees
            let tree1 = huffmanTrees.shift();
            let tree2 = huffmanTrees.shift();

            //combine them and add it to the array
            tree1 = tree1.combine(tree1, tree2);

            huffmanTrees.push(tree1);

        }

        //creates the dictionary with the binary encoding and char.
        let binaryDict = new Dictionary(256);

        //convert the path to the leaf into binary code
        this.pathToBinary(huffmanTrees[0], "", binaryDict);

        // write the binary conversion into the output file corrosponding to the char.
        fs.writeFileSync(this.#file + ".huff", "");

        for (let i = 0; i < fileData.length; i++) {
            let key = new StringHash(fileData[i]);
            fs.appendFileSync(this.#file + ".huff", binaryDict.get(key) + " ");
        }

        //add new line char at the end
        fs.appendFileSync(this.#file + ".huff", "\n");

    }

    //checks if the set of trees contains the tree with the given key 
    contains(setOfTrees, size, key) {
        for (let i = 0; i < size; i++) {
            if (key === setOfTrees[i].getChar())
                return true;
        }

        return false;
    }


    // convert the path of each leaf into binary code and stores it into the dictionary 
    pathToBinary(tree, binaryCode, list) {

        //recursively find the path to the leaf from the root
        if (tree.getLeft() !== null)
            this.pathToBinary(tree.getLeft(), binaryCode + "0", list);
        if (tree.getRight() !== null)
            this.pathToBinary(tree.getRight(), binaryCode + "1", list);


        //As we reach to the leaf , add the code to the dictionary
        if (tree.getLeft() === null && tree.getRight() === null) {
            let key = new StringHash(tree.getChar());
            list.put(key, binaryCode); // key - char , value - binary code
        }

    }

}

module.exports = HuffmanEncode;
