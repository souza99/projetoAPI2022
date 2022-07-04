
const ItemController = require("../controllers/ItemController")

module.exports = class ItemRoute {
    constructor(app) {
        app.route("/item").get(ItemController.getUsers);
        app.route("/item").post(ItemController.save);
    }
}