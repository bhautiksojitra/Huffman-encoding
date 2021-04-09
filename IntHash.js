'use strict';

let Hashable = require('./Hashable.js');
class IntHash extends Hashable {

    #intValue;
    constructor(k) {
        super();
        if (typeof (k) == "number")
            this.#intValue = k;
        else
            throw new Error("the value is not a Number");
    }

    hashVal() {
        return this.#intValue;
    }

    equals(x) {
        if (x instanceof IntHash) {
            if (x.hashVal() === this.hashVal()) {
                return true;
            }
        }

        return false;
    }

}

module.exports = IntHash;