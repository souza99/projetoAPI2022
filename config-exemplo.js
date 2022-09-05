"use strict"

class Config {
    static createConfig () {
        global.config = {
            porta: process.env.PORT || 3000,
            db: {
                connectMethod: "mongodb+srv",
                name: "",
                url: "",
                password: "",
                urlParams: "?retry/Writes=true&w=majority"
            }
        }
    }
}

module.exports = Config.createConfig();
    