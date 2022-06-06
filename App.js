"use strict"

const express = require("express")

class App{
    static async init(){
        let app = new express();
        app.use(express.json);


        app.get("/endpoint", (req, res) => {
            res.json({
                name: "projetoapi2022",
                version: "1.0.0",
                description: "pojeto API",
                main: "index.js",
            })
        })

        app.listen(3000, () => {
            console.log("Startou")
        })
    }
}

App.init();