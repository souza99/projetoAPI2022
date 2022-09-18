"use strict";
const ItemService = require("../services/ItemService")

module.exports = class ItemController {

    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await ItemService.buscarPorId(req.params.idItem));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ItemController.buscarPorId" + error.message);
        }
    }

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await ItemService.buscarTodos());
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ItemController.buscarTodos" + error.message);
        }
    }

    static async criar(req, res) {
        try {
            res.status(200).send(await ItemService.criar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ItemController.criar" + error.message);
        }
    }

    static async deletar(req, res) {
        try {
            res.status(200).send(await ItemService.deletar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ItemController.deletar" + error.message);
        }
    }

    static async editar(req, res) {
        try {
            res.status(200).send(await ItemService.atualizar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ItemController.editar" + error.message);
        }
    }
}