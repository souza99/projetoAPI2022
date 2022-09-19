
const CharacterController = require("../src/controllers/CharacterController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/User")
            .get(CharacterController.buscarTodos)
            .post(CharacterController.criar)
            .put(CharacterController.editar)
            .delete(CharacterController.deletar)

        app.route("/User:idUser").get(CharacterController.buscarPorId);
    }
}