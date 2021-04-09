'use strict';

let Hashable = require('./Hashable.js');

class StringHash extends Hashable {

    #stringVal;
    constructor(k) {
        super();
        if (typeof (k) == "string")
            this.#stringVal = k;
        else
            throw new Error("Can't be Initialised ! Not String !");
    }

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

    powerFunction(x, n) {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result = result * x;
        }
        return result;
    }

    equals(x) {
        if (x instanceof StringHash) {
            if (x.hashVal() === this.hashVal()) {
                return true;
            }
        }
        return false;
    }

}
module.exports = StringHash;