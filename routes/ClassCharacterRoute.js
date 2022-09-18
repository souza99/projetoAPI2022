const ClassCharacterController = require("../src/controllers/ClassCharacterController")

module.exports = class ClassCharacterRoute {
    constructor(app){
        app.rout("/classCharacterRoute").get(ClassCharacterController.getClassCharacter)
    }
}