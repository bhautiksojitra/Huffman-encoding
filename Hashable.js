/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : Hashable (abstract class)

    Purpose    : holds data (keys)

---------------------------------------------*/
'use strict';

class Hashable {


    // make the class abstract - won't allow user to implement this class 
    constructor() {
        if (this.constructor === Hashable) {
            throw new Error("You shouldn't create Hashable Object");
        }
        else {
            //Implements child class constructor.
        }
    }


    // polymorphhic methods
    // force us to implement the method in the sub class
    hashVal() {
        throw new Error("Couldn't find hashVal() in sub class. ");
    }

    equals(x) {
        throw new Error("Couldn't  find equals(x) in sub class.");
    }

}

module.exports = Hashable;
