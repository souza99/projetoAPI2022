
const AbilityController = require("../src/controllers/AbilityController")

module.exports = class AbilityRoute {
    constructor(app) {
        app.route("/Ability")
            .get(AbilityController.buscarTodos)
            .post(AbilityController.criar)
            .put(AbilityController.editar)
            .delete(AbilityController.deletar)

        app.route("/Ability:idAbility").get(AbilityController.buscarPorId);
    }
}
