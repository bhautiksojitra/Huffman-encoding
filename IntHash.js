/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : IntHash (Sub class of Hashable)

    Purpose    : contains the key with int values

---------------------------------------------*/

'use strict';

// import required super class
let Hashable = require('./Hashable.js');

class IntHash extends Hashable {

    //private int value of the key
    #intValue;
    constructor(k) {
        super(); // needs to implement super class 
        if (typeof (k) == "number")
            this.#intValue = k;
        else
            throw new Error("the value is not a Number");
    }

    //return the field of the key
    hashVal() {
        return this.#intValue;
    }

    //checks if both the keys are equal or not
    equals(x) {

        if (x instanceof IntHash) {

            if (x.hashVal() === this.hashVal()) {
                return true;
            }
        }// to return true both keys should be of the same type

        return false;
    }

}

module.exports = IntHash;