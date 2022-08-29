const ClassCharacterService = require("../services/ClassCharacterService");

module.exports = class ClassCharacterController{
    static async get(req, res){
        res.status(200).send(ClassCharacterService.getClassCharacters())
    }

    static async save(req, res){
        res.status(200).send(ClassCharacterService.save(req.body))
    }
}
