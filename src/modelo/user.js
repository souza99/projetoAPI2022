"use strict"

const mongoose = requere('mongoose');

module.exports = class User extends mongoose.Schema {
    constructor () {
        supper({
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
        mongoose.model("User", this);
    }// final do construtor
}
