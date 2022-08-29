const ItemService = require("../services/ItemService")


module.exports = class ItemController {
    static async getItens(req, res) {
        res.status(200).send(ItemService.getItens())
    }

    static async save(req, res) {
        res.status(200).send(ItemService.save(req.body))
    }
}