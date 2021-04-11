'use strict';
let LinkedList = require('./LinkedList.js');
let KVPair = require('./KVPair.js');
let Hashable = require('./Hashable.js');
class Dictionary {

    #array;
    #size;
    constructor(size) {
        this.#array = new Array(size);
        this.#size = size;
        this.#array.fill(new LinkedList());
    }

    contains(k) {
        if (k instanceof Hashable) {
            for (let i = 0; i < this.#size; i++) {
                if (this.#array[i].search(k))
                    return true;
            }
        }
        else {
            throw new Error("Input Parameter is wrong typed !");
        }
        return false;
    }

    put(k, v) {
        if (k instanceof Hashable) {
            if (!this.contains(k)) {
                let key = new KVPair(k, v);
                this.#array[k.hashVal() % this.#size].add(key);

            }
            else {
                this.#array[k.hashVal() % this.#size].replace(k, new KVPair(k, v));
            }

        }
        else {
            throw new Error("the key is not hashable !");
        }
    }

    get(k) {
        if (k instanceof Hashable) {
            for (let i = 0; i < this.#size; i++) {
                let result = this.#array[i].getValue(k);
                if (result !== undefined)
                    return result;
            }
        }
        else {
            throw new Error("Input Parameter is wrong typed !");
        }
        return undefined;
    }

    isEmpty() {

        for (let i = 0; i < this.#size; i++) {
            if (!this.#array[i].isEmpty())
                return false;
        }

        return true;

    }


    printData() {
        for (let i = 0; i < this.#size; i++)
            this.#array[i].printList();
    }

    getArray() {
        return this.#array;
    }





}
module.exports = Dictionary;

