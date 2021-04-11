'use strict';

let NodeData = require('./NodeData.js');
let KVPair = require('./KVPair.js');

class LinkedList {

    #top;
    #size;
    constructor() {
        this.#top = null;
        this.#size = 0;
    }

    add(data) {
        if (data instanceof KVPair) {
            this.#top = new NodeData(data, this.#top);
            this.#size++;
        }
    }

    retrieveData(key) {

        let temp = this.#top;
        while (temp !== null) {

            if (temp.getData().getKey().equals(key)) {
                return temp.getData();
            }
            temp = temp.getNext();
        }

        return null;
    }

    replace(key, newData) {
        let temp = this.#top;
        while (temp !== null) {

            if (temp.getData().getKey().equals(key)) {
                temp.replaceData(newData);
            }
            temp = temp.getNext();
        }
    }

    getValue(key) {
        let data = this.retrieveData(key);
        if (data != null)
            return data.getValue();
        return undefined;
    }

    search(key) {
        let data = this.retrieveData(key);

        if (data != null)
            return true;
        return false;
    }

    isEmpty() {
        return this.#top === null;
    }

    printList() {
        let temp = this.#top;

        while (temp != null) {
            console.log(" " + temp.getData().getKey().getString()
                + " " + temp.getData().getValue());
            temp = temp.getNext();
        }
    }





}

module.exports = LinkedList;


