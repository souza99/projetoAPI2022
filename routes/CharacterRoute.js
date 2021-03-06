
const CharacterController = require("../controllers/CharacterController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/character").get(CharacterController.getCharacters);
        app.route("/character").post(CharacterController.save);
    }
}