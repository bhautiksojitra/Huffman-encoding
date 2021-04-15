/*-------------------------------------------

    Name       : Bhautik Sojitra
    Student no : 7900140
    Class      : NodeData

    Purpose    : helps the data structure to hold the data and next pointer.

---------------------------------------------*/
'use strict';

class NodeData {

    #data;
    #next;
    constructor(data, next) {
        this.#data = data;
        this.#next = next;
    } // data and the pointer to the next data

    getNext() {
        return this.#next;
    }// returns next node

    getData() {
        return this.#data;
    }// returns the data value

    replaceData(newData) {
        this.#data = newData;
    }// set the new Data

}

module.exports = NodeData;