'use strict';

class KVPair {
    #key;
    #value;

    constructor(k, v) {
        this.#key = k;
        this.#value = v;
    }

    getValue() {
        return this.#value;
    }

    getKey() {
        return this.#key;
    }
}
module.exports = KVPair;