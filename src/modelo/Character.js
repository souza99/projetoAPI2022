"use strict"

const mongoose = require('mongoose');

module.exports = class Character extends mongoose.Schema {
    constructor () {
        super({
           id: Number,
           abilityId: Number,
           name: String,
           description: String,
           classId: Number,
        });
        mongoose.model("Character", this);
    }
}