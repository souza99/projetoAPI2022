
"use strict";
const AbilityService = require("../Services/AbilityService");

module.exports = class AbilityController {


    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await AbilityService.buscarPorId(req.params.idAbility));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("AbilityController.buscarPorId" + error.message);
        }
    }

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await AbilityService.buscarTodos());
        } catch (error) {
            res.status(500).send(error.message);
            console.error("AbilityController.buscarTodos" + error.message);
        }
    }

    static async criar(req, res) {
        try {
            res.status(200).send(await AbilityService.criar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("AbilityController.criar" + error.message);
        }
    }

    static async deletar(req, res) {
        try {
            res.status(200).send(await AbilityService.deletar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("AbilityController.deletar" + error.message);
        }
    }

    static async editar(req, res) {
        try {
            res.status(200).send(await AbilityService.atualizar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("AbilityController.editar" + error.message);
        }
    }

}
