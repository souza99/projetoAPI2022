
"use strict"

const mongoose = require('mongoose');

module.exports = class Ability extends mongoose.Schema {
    constructor () {
        super({
           id: Number,
        });
        mongoose.model("Ability", this);
    }
}