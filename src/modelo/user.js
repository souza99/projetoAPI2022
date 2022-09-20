"use strict";
const Mongoose = require("mongoose");

module.exports = class User extends Mongoose.Schema {
    constructor () {
        super({
            nome: String,
            sobrenome: String,
            email: String,
            senha: String,
            permissoes: String,
            status: String,
            criado_em: Date,
            atualizado_em: Date,
            acesso_em: Date
        })
        Mongoose.model("User", this);
    }// final do construtor
}
