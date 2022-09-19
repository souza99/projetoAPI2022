
const UserController = require("../src/controllers/UserController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/User")
            .get(UserController.buscarTodos)
            .post(UserController.criar)
            .put(UserController.editar)
            .delete(UserController.deletar)

        app.route("/User:idUser").get(UserController.buscarPorId);
    }
}