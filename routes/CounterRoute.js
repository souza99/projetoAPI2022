
const CharacterController = require("../src/controllers/CharacterController");

module.exports = class CounterRoutes{
    constructor(app){
        app.route("/Character")
            .get(CharacterController.buscarTodos)
            .post(CharacterController.criar)
            .put(CharacterController.editar)
            .delete(CharacterController.deletar)

        app.route("/Character:idCharacter").get(CharacterController.buscarPorId);
    }
}