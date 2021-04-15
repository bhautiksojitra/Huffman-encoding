/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : Main File

    Purpose    : Runs the entire project 

---------------------------------------------*/
'use strict'

let HuffmanEncode = require('./HuffmanEncode.js');

function main() {

    //Initialise HuffmanEncode class
    let fileEncoder = new HuffmanEncode(process.argv[2]);
    fileEncoder.encode(); // encode the given file
}

main();