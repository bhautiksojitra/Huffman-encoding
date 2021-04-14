
"use strict";

let assert = require('assert');
let Dictionary = require('./Dictionary.js');
let LinkedList = require('./LinkedList.js');
let KVPair = require('./KVPair.js');
let IntHash = require('./IntHash.js');
let StringHash = require('./StringHash.js');
let Tree = require('./HuffmanTree.js');



function testIsEmpty() {


    let d1 = new Dictionary(5);
    let d2 = new Dictionary(5);

    assert(d1.isEmpty());
    let key = new IntHash(5);
    d1.put(key, "Mike");

    assert(d1.isEmpty() === false);


    assert(d2.isEmpty());
    let key2 = new StringHash("Computer");
    d2.put(key2, "Mike");

    assert(d2.isEmpty() === false);

}

function testPut() {

    let d1 = new Dictionary(5);

    let key1 = new IntHash(10);
    let key2 = new StringHash("Temp");
    let key3 = key2;

    d1.put(key1, "Mike");
    d1.put(key1, "Ali");

    assert(d1.contains(key1));
    assert(!d1.contains(key2));


    d1.put(key2, "Steve");

    assert(d1.contains(key3));
    assert(d1.contains(key2));

    assert(d1.get(key1) === "Ali");
    assert(d1.get(key1) !== "Mike");
    assert(d1.get(key2) === "Steve");



}

function testContains() {
    let d1 = new Dictionary(5);

    let k1 = new IntHash(5);
    d1.put(k1, "Mike");
    let k2 = new IntHash(5);


    assert(d1.contains(k1));
    assert(d1.contains(k2));
}

function testReplace() {
    let d1 = new Dictionary(5);

    let k1 = new IntHash(4);
    let k2 = new IntHash(4);
    let k3 = new IntHash(4);

    d1.put(k1, "Mike");
    d1.put(k2, "Mike");
    d1.put(k3, "Mike");

    d1.put(k1, "Ali");
    d1.put(k2, "Ali");


    assert(d1.get(k2) === "Ali");
    assert(d1.contains(k2));
}

function testLL() {
    let list1 = new LinkedList();
    let pair1 = new KVPair(new IntHash(3), "Mike");
    list1.add(pair1);
    list1.replace(pair1.getKey(), "Ali");


    assert(pair1.getValue() === "Ali");
}

function testTree() {
    let tree1 = new Tree('C', 0.1);
    let tree2 = new Tree('B', 0.1);
    let tree3 = new Tree('T', 0.1);
    let tree4 = new Tree('D', 0.1);
    let tree5 = new Tree('M', 0.1);
    let tree6 = new Tree('K', 0.1);
    let tree7 = new Tree('O', 0.1);
    let tree8 = new Tree('Z', 0.1);

    let tree9 = new Tree('I', 0.1);
    let tree10 = new Tree('F', 0.1);
    let tree11 = new Tree('H', 0.1);
    let tree12 = new Tree('N', 0.1);
    let tree13 = new Tree('J', 0.1);
    let tree14 = new Tree('L', 0.1);
    let tree15 = new Tree('W', 0.1);
    let tree16 = new Tree('V', 0.1);

    let tree17 = tree1.combine(tree2, tree3);
    let tree18 = tree2.combine(tree5, tree10);
    let tree19 = tree3.combine(tree13, tree11);

    let tree20 = tree1.combine(tree17, tree18);
    let tree21 = tree1.combine(tree19, tree16);
    console.log(tree20.traversal(tree20, tree5));
}

function main() {
    // testIsEmpty();
    // testPut();
    // testContains();
    // testReplace();
    testTree();

}

main();