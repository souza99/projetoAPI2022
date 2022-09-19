"use strict";

const mongoose = require("mongoose");

class FabricaDeConexao {
    static async obterConexao() {
        let url;
        let { db } = global.config
        let options = {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000
        };

        if (!db.username && !db.password)
            url = `${db.connectMethod}://${db.url}/${db.name}`;
        else
            url = `${db.connectMethod}://${db.username}:${db.password}@${db.url}/${db.name}?retryWrites=true&w=majority`;

        return mongoose.connect(url, options);
    }
}

module.exports = FabricaDeConexao;
