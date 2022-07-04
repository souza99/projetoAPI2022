const AbilityService = require("../services/AbilityService")


module.exports = class AbilityController {
    static async getAbilitys(req, res) {
        res.status(200).send(AbilityService.getAbilitys())
    }

    static async save(req, res) {
        res.status(200).send(AbilityService.save(req.body))
    }
}