"use strict";
const UserService = require("../services/UserService")

module.exports = class UserController {

    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await UserService.buscarPorId(req.params.idUser));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("Usercontroller.buscarPorId" + error.message);
        }
    }

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await UserService.buscarTodos());
        } catch (error) {
            res.status(500).send(error.message);
            console.error("Usercontroller.buscarTodos" + error.message);
        }
    }

    static async criar(req, res) {
        try {
            res.status(200).send(await UserService.criar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("UserContorller.criar" + error.message);
        }
    }

    static async deletar(req, res) {
        try {
            res.status(200).send(await UserService.deletar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("UserController.deletar" + error.message);
        }
    }

    static async editar(req, res) {
        try {
            res.status(200).send(await UserService.atualizar(req.body));
        } catch (error) {
            res.status(500).send(error.message);
            console.error("UserController.editar" + error.message);
        }
    }
}