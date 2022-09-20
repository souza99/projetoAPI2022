"use strict"

class Config {
    static createConfig () {
        global.config = {
            porta: process.env.PORT || 3000,
            db: {
                connectMethod: "mongodb+srv",
                name: "masterRPG",
                url: "May98dsygames",
                password: "May98dsygames",
                username: "souza99",
            }
        }
    }
}

module.exports = Config.createConfig();
    