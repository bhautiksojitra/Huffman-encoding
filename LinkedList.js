/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : LinkedList

    Purpose    : helps the dictionary to contain the keys at the same index

---------------------------------------------*/
'use strict';

let NodeData = require('./NodeData.js');
let KVPair = require('./KVPair.js');

class LinkedList {

    #top;
    #size;
    #retrieveData
    constructor() {
        this.#top = null;
        this.#size = 0;
    }// pointer to the top data and the size


    // adds the data in the lsit
    add(data) {
        // data should be of KVPair Object
        if (data instanceof KVPair) {

            // creates the node and adds that in the list
            this.#top = new NodeData(data, this.#top); // changes the top pointer
            this.#size++;
        }
    }

    //returns the data value at the given key
    retrieveData(key) {

        let temp = this.#top;
        while (temp !== null) {

            if (temp.getData().getKey().equals(key)) {
                return temp.getData();
            }
            temp = temp.getNext();
        }//loops through the list and get the required data 

        return null;
    }

    // replace the new data at the given key
    replace(key, newData) {
        let temp = this.#top;

        while (temp !== null) {

            if (temp.getData().getKey().equals(key)) {
                temp.replaceData(newData);
            }
            temp = temp.getNext();
        }
    }


    //returns the value at the given key or return undefined
    getValue(key) {
        let data = this.retrieveData(key);
        if (data != null)
            return data.getValue();
        return undefined;
    }

    // search the given key in the list
    search(key) {
        let data = this.retrieveData(key);

        if (data != null)
            return true;
        return false;
    }

    // returns if the list is empty or not
    isEmpty() {
        return this.#top === null;
    }

    getKeyTop() {
        return this.#top.getData().getKey();
    }
}

module.exports = LinkedList;


