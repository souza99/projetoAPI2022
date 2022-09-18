"use strict";

const CharacterService = require("../Services/CharacterService");

module.exports = class CharacterController {

    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await CharacterService.buscarPorId(req.params.idCharacter));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("CharacterController.buscarPorId" + error.message);
        }
    }

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await CharacterService.buscarTodos());
        } catch (error) {
            res.status(500).send(error.message);
            console.error("CharacterController.buscarTodos" + error.message);
        }
    }

    static async criar(req, res) {
        try {
            res.status(200).send(await CharacterService.criar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("CharacterController.criar" + error.message);
        }
    }

    static async deletar(req, res) {
        try {
            res.status(200).send(await CharacterService.deletar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("CharacterController.deletar" + error.message);
        }
    }

    static async editar(req, res) {
        try {
            res.status(200).send(await CharacterService.atualizar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("CharacterController.editar" + error.message);
        }
    }

}