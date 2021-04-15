/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : TestFile

    Purpose    : testing the data structure (Dictionary)

---------------------------------------------*/

"use strict";

let assert = require('assert'); // Implements assert function
let Dictionary = require('./Dictionary.js');
let LinkedList = require('./LinkedList.js');
let KVPair = require('./KVPair.js');
let IntHash = require('./IntHash.js');
let StringHash = require('./StringHash.js');



//checks isEmpty() function
function testIsEmpty() {


    // creates 2 dictionary of the same size 
    let d1 = new Dictionary(5);
    let d2 = new Dictionary(1);

    assert(d1.isEmpty()); // should be true - no elements added

    //1 key added
    let key = new IntHash(5);
    d1.put(key, "Mike");

    assert(d1.isEmpty() === false); // should return false 


    // Same testing with another dictionary with different size 
    assert(d2.isEmpty());
    let key2 = new StringHash("Computer");
    d2.put(key2, "Mike");

    assert(d2.isEmpty() === false);

}


//Testing put function
function testPut() {

    // creates new Dictionary
    let d1 = new Dictionary(5);

    // creates the keys with hashValues
    let key1 = new IntHash(10);
    let key2 = new IntHash(20);
    let key3 = key2;

    d1.put(key1, "Mike");
    d1.put(key1, "Ali");

    assert(d1.contains(key1));
    assert(!d1.contains(key3));



    d1.put(key2, "Steve");

    //should return true because both the keys contains same value
    assert(d1.contains(key3));
    assert(d1.contains(key2));

    //Ali was added in the key latest
    assert(d1.get(key1) === "Ali");
    assert(d1.get(key1) !== "Mike");
    assert(d1.get(key2) === "Steve");



}

//check contains function
function testContains() {


    let d1 = new Dictionary(5); // new dictionary 

    // 2 keys but same values
    let k1 = new IntHash(5);
    d1.put(k1, "Mike");
    let k2 = new IntHash(5);


    //one added in the dictionary 
    //but another has the same value so will return true
    assert(d1.contains(k1));
    assert(d1.contains(k2));
}


//Test replace function
function testReplace() {

    // new Dictionary
    let d1 = new Dictionary(5);

    //two keys with same values - added at one place
    let k1 = new IntHash(4);
    let k2 = new IntHash(4);


    d1.put(k1, "Mike");
    d1.put(k2, "Ali");

    //will check the value inside the k1 which is 4
    assert(d1.get(k1) === "Ali");

    d1.put(k1, "Mike");

    assert(d1.get(k2) === "Mike");
    assert(d1.contains(k2));
}

//Testing linked list of the dictionary
function testLL() {
    let list1 = new LinkedList(); // creates new linked list
    let pair1 = new KVPair(new IntHash(3), "Mike");

    assert(list1.isEmpty());
    list1.add(pair1); // add 1 data in it with the key

    assert(list1.search(pair1.getKey()));
    list1.replace(pair1.getKey(), "Ali"); // change the value of the given key 

    assert(list1.isEmpty() === false); // list won't be empty  

}

function main() {
    console.log("Testing started... ");
    testIsEmpty();
    console.log("Test 1 passed.");
    testPut();
    console.log("Test 2 passed.");
    testContains();
    console.log("Test 3 passed.");
    testReplace();
    console.log("Test 4 passed.");
    testLL();
    console.log("Test 5 passed.");
    console.log("All Tests passed !");
}

main();