
const AbilityController = require("../src/controllers/AbilityController")

module.exports = class AbilityRoute {
    constructor(app) {
        app.route("/ability").get(AbilityController.getAbilitys);
        app.route("/ability").post(AbilityController.save);
    }
}