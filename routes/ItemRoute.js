
const ItemController = require("../src/controllers/ItemController")

module.exports = class ItemRoute {
    constructor(app) {
        app.route("/Item")
            .get(ItemController.buscarTodos)
            .post(ItemController.criar)
            .put(ItemController.editar)
            .delete(ItemController.deletar)

        app.route("/Item:idItem").get(ItemController.buscarPorId);
    }
}