const express = require("express");
const cors = require("cors");
const { json } = require("express");
const UserRoute = require("./routes/UserRoutes")
const CharacterRoute = require("./routes/CharacterRoute")
const AbilityRoute = require("./routes/AbilityRoute")
const ClassCharacterRoute = require("./routes/ClassCharacterRoute")
const ItemRoute = require("./routes/ItemRoute")
const FablicaDeConexao = require("./conexao/FabricaDeConexao")
const porta = process.env.PORT || 3000;

var contador = 1;

class App {
    static async init() {
        let app = new express();
        app.use(cors());

        try {
            console.log("Obtendo conexão com banco de dados...");
            await FablicaDeConexao.obterConexao();
        } catch(error) {
            console.log(`Erro ao conectar com banco de dados: ${error.message}, Tente novamente após correção do erro`);
        }
        app.use(express.json());
        app.get("/", (req, res) => {
            res.json({
                name: "ifio-api-2022",
                version: "1.0.0",
                description: "Projeto API ifpr",
                author: "Joao pedro"
            })
        })

        app.get("/ping", (req, res)=>{
            res.json({"Resposta":"pong"})
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
        new UserRoute(app)
        new CharacterRoute(app)
        new AbilityRoute(app)
        new ClassCharacterRoute(app)
        new ItemRoute(app)
    }
}
App.init();
