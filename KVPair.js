/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : KVPair

    Purpose    : Holds the data with the key and value in it

---------------------------------------------*/
'use strict';

let Hashable = require('./Hashable.js');

class KVPair {

    #key;
    #value;
    constructor(k, v) {
        if (k instanceof Hashable)
            this.#key = k;
        else
            throw new Error("Key isn't type Hashable");

        this.#value = v;
    }// returns the value

    getValue() {
        return this.#value;
    }

    getKey() {
        return this.#key;
    }// returns the key
}
module.exports = KVPair;