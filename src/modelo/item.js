"use strict"

const mongoose = require('mongoose');

module.exports = class Item extends mongoose.Schema {
    constructor () {
        super({
           id: Number,
           nome: String,
           descricao: String,
           tipo: String,
           padrao: Boolean,
        });
        mongoose.model("Item", this);
    }
}