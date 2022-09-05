"use strict";

const User = require("../modelo/user");
const UserService = require("../services/UserService")

module.exports = class UserController {
    static async buscarPorId(req, res) {
        try {
            res.static(200).send(await UserService.buscarPorId(req.params.idUsuario));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.buscarPorId' + e.message);
        }
    }//BuscarPorId();

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await UserService.buscarTodos());
        } catch(e){}
    }
}