"use strict"

const mongoose = require('mongoose');

module.exports = class ClassCharac extends mongoose.Schema {
    constructor () {
        super({
           id: Number,
        });
        mongoose.model("ClassCharac", this);
    }
}