"use strict";
const ClassCharacterService = require("../Services/ClassCharacterService")

module.exports = class ClassCharacterController {

    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await ClassCharacterService.buscarPorId(req.params.idClassCharacter));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ClassCharacterController.buscarPorId" + error.message);
        }
    }

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await ClassCharacterService.buscarTodos());
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ClassCharacterController.buscarTodos" + error.message);
        }
    }

    static async criar(req, res) {
        try {
            res.status(200).send(await ClassCharacterService.criar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ClassCharacterController.criar" + error.message);
        }
    }

    static async deletar(req, res) {
        try {
            res.status(200).send(await ClassCharacterService.deletar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ClassCharacterController.deletar" + error.message);
        }
    }

    static async editar(req, res) {
        try {
            res.status(200).send(await ClassCharacterService.atualizar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("ClassCharacterController.editar" + error.message);
        }
    }
}
