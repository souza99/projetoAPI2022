const express = require("express");
const cors = require("cors");
const { json } = require("express");

const FablicaDeConexao = require("./conexao/FabricaDeConexao")
const porta = process.env.PORT || 3000;

var contador = 1;

class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        try {
            console.log("Obtendo conexão com banco de dados...");
            await FablicaDeConexao.obterConexao();
        } catch(error) {
            console.log(`Erro ao conectar com banco de dados: ${error.message}, Tente novamente após correção do erro`);
        }

        //instancia Usuario
       const UserRoute = require("./routes/UserRoutes")
       new UserRoute();

       //instancia o personagem
       const CharacterRoute = require("./routes/CharacterRoute")
       new CharacterRoute();


       //intancia a habilidade
       const AbilityRoute = require("./routes/AbilityRoute")
       new AbilityRoute();

       //intancia a classe do personagem
       const ClassCharacterRoute = require("./routes/ClassCharacterRoute")
       new ClassCharacterRoute();

       //instancia o item que o personagem pode usar
       const ItemRoute = require("./routes/ItemRoute")
       new ItemRoute();

        // app.get("/", (req, res) => {
        //     res.json({
        //         name: "ifio-api-2022",
        //         version: "1.0.0",
        //         description: "Projeto API ifpr",
        //         author: "Joao pedro"
        //     })
        // })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
    }
}
App.init();
