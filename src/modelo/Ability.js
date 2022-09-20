
"use strict"

const mongoose = require('mongoose');

module.exports = class Ability extends mongoose.Schema {
    constructor () {
        super({
           id: Number,
           name: String,
           descripton: String,
           rec_mac: Boolean,
           rec_fis: Boolean,
           rec_psi: Boolean,
           vid_res: Boolean,
           vid_res_pot: Number,
           rec_mac_pot: Number,
           rec_psi_pot: Number,
           rec_fis_pot: Number,
        });
        mongoose.model("Ability", this);
    }
}
