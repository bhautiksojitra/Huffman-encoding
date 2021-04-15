/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : String Hash(sub class of hashable)

    Purpose    : keys that holds string value

---------------------------------------------*/
'use strict';

// import required Super class
let Hashable = require('./Hashable.js');

class StringHash extends Hashable {

    #stringVal;
    constructor(k) {
        super(); // implements super class constructor
        if (typeof (k) == "string")
            this.#stringVal = k;
        else
            throw new Error("Can't be Initialised ! Not String !");
    }

    //returns the int value corresponding to the string value
    hashVal() {

        let asciiValue;
        let p = 3;
        let n = this.#stringVal.length;
        let returnValue = 0;
        for (let i = 0; i < n; i++) {
            asciiValue = this.#stringVal.charCodeAt(i);
            returnValue = returnValue + asciiValue * this.powerFunction(p, (n - 1) - i);
        }

        return returnValue;
    }

    // powerFuction(x , n) = x^n
    powerFunction(x, n) {
        let result = 1;

        for (let i = 0; i < n; i++) {
            result = result * x;
        }

        return result;
    }

    // returns true if both the keys are same typed and has equal values 
    equals(x) {
        if (x instanceof StringHash) {
            if (x.hashVal() === this.hashVal()) {
                return true;
            }
        }
        return false;
    }

    getString() {
        return this.#stringVal;
    }// returns string field

}
module.exports = StringHash;