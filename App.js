const express = require("express");
const cors = require("cors");
const { json } = require("express");
const CounterRoute = require("./routes/CounterRoute")
const UserRoute = require("./routes/UserRoute")
const CharacterRoute = require("./routes/CharacterRoute")
const AbilityRoute = require("./routes/AbilityRoute")
const ClassCharacterRoute = require("./routes/ClassCharacterRoute")
const ItemRoute = require("./routes/ItemRoute")
const porta = process.env.PORT || 3000;

var contador = 1;

class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            res.json({
                name: "ifio-api-2022",
                version: "1.0.0",
                description: "Projeto API",
                author: "Marcelo F. Terenciani"
            })
        })

        app.get("/ping", (req, res)=>{
            res.json({"Resposta":"pong"})
        })

        app.get("/contador", (req, res)=>{
            res.json({"contador": contador})
        })

        app.get("/incremento", (req, res)=>{
            contador ++;
            res.json({"contador": contador})
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
        new CounterRoute(app)
        new UserRoute(app)
        new CharacterRoute(app)
        new AbilityRoute(app)
        new ClassCharacterRoute(app)
        new ItemRoute(app)
    }
}
App.init();