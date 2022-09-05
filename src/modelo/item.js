"use strict"

const mongoose = require('mongoose');

module.exports = class Item extends mongoose.Schema {
    constructor () {
        super({
           id: Number 
        });
        mongoose.model("Item", this);
    }
}