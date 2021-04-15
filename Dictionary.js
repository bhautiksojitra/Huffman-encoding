/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : Dictionary

    Purpose    : implements Data structure for the project (Holds keys & value)

---------------------------------------------*/
'use strict';

// importing required classes
let LinkedList = require('./LinkedList.js');
let KVPair = require('./KVPair.js');
let Hashable = require('./Hashable.js');
class Dictionary {

    //private fields - array and its size
    #array;
    #size;
    constructor(size) {
        this.#array = new Array(size);
        this.#size = size;
        this.#array.fill(new LinkedList());
    } // Initialising all the fields

    //checks if the the key k is in the Dictionary
    contains(k) {
        // should work only if the key is type Hashable
        if (k instanceof Hashable) {
            for (let i = 0; i < this.#size; i++) {
                if (this.#array[i].search(k)) // search key in each array index
                    return true;
            }
        }
        else {
            throw new Error("Input Parameter is wrong typed !");
        }
        return false;
    }

    //Add value in with key i the dictionary
    put(k, v) {

        if (k instanceof Hashable) {
            if (!this.contains(k)) {
                let key = new KVPair(k, v);
                this.#array[k.hashVal() % this.#size].add(key);

            }
            else {
                this.#array[k.hashVal() % this.#size].replace(k, new KVPair(k, v));
            }// adds the value or replace the value

        }
        else {
            throw new Error("the key is not hashable !");
        }
    }

    //return the value present with the given key
    get(k) {

        if (k instanceof Hashable) {
            for (let i = 0; i < this.#size; i++) {
                let result = this.#array[i].getValue(k);
                if (result !== undefined)
                    return result;
            }// try to find value from each index
        }
        else {
            throw new Error("Input Parameter is wrong typed !");
        }
        return undefined;
    }

    // checks if the entire dictionary is empty 
    isEmpty() {

        for (let i = 0; i < this.#size; i++) {
            if (!this.#array[i].isEmpty())
                return false;
        }// checks if each linkedlist is empty or not

        return true;

    }

    getKey(index) {
        return this.#array[index].getKeyTop();
    }

    getSize() {
        return this.#size;
    }

}

module.exports = Dictionary;

