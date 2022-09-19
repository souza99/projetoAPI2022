"use strict"

const mongoose = require('mongoose');

module.exports = class ClassCharac extends mongoose.Schema {
    constructor () {
        super({
           id: Number,
           name: String,
           description: String,
           default: Boolean,
           esc: Number,
           vid: Number,
           rec_mac: Number,
           rec_fis: Number,
           rec_psi: Number,
        });
        mongoose.model("ClassCharac", this);
    }
}