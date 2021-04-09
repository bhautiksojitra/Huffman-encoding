'use strict';
class Hashable {


    constructor() {
        if (this.constructor === Hashable) {
            throw new Error("You shouldn't create Hashable Object");
        }
        else {
            //Implements child class constructor.
        }
    }


    hashVal() {
        throw new Error("Couldn't find hashVal() in sub class. ");
    }

    equals(x) {
        throw new Error("Couldn't  find equals(x) in sub class.");
    }

}
module.exports = Hashable;
