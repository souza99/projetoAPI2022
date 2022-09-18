"use strict"

const mongoose = require('mongoose');

module.exports = class Character extends mongoose.Schema {
    constructor () {
        super({
           id: Number,
        });
        mongoose.model("Character", this);
    }
}