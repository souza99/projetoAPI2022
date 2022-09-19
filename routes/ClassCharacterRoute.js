const ClassCharacterController = require("../src/controllers/ClassCharacterController")

module.exports = class ClassCharacterRoute {
    constructor(app) {
        app.route("/ClassCharacter")
            .get(ClassCharacterController.buscarTodos)
            .post(ClassCharacterController.criar)
            .put(ClassCharacterController.editar)
            .delete(ClassCharacterController.deletar)

        app.route("/ClassCharacter:idClassCharacter").get(ClassCharacterController.buscarPorId);
    }
}