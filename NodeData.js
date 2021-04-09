'use strict';
class NodeData {
    #data;
    #next;

    constructor(data, next) {
        this.#data = data;
        this.#next = next;
    }

    getNext() {
        return this.#next;
    }

    getData() {
        return this.#data;
    }

    replaceData(newData) {
        this.#data = newData;
    }



}
module.exports = NodeData;