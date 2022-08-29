const CharacterService = require("../services/UserCharacter")


module.exports = class CharacterController {
    static async getCharacters(req, res) {
        res.status(200).send(CharacterService.getCharacters())
    }

    static async save(req, res) {
        res.status(200).send(CharacterService.save(req.body))
    }
}