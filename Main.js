'use strict'

let HuffmanEncode = require('./HuffmanEncode.js');

function main() {

    let fileEncoder = new HuffmanEncode(process.argv[2]);
    fileEncoder.encode();
}

main();