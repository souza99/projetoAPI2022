"use strict";
const Mongoose = require("mongoose");
const User = Mongoose.model("../modelo/user");

module.exports = class UserService {

    static async buscarPorId(idUser) {
        try {
            return await User.findById(idUser);
        } catch (error) {
            throw new Error ('UserService.findById: '+ error);
        }
    } // buscarPorId ();
    static async buscarTodos () {
        try {
            return await User.find({});
        }   catch (error) {
            throw new Error('UserService.findAll: '+ error);
        }
    }// buscatodos ();
    static async criar(user) {
        try {
            return await User.create(user);
        } catch (error) {
            throw new Error('UserService.criar: ' + error);
        }
    }// criar ()
    static async deletar (user) {
        try {
            if (!user._id) {
                throw new Error('A identificação do usuario deve informar. ');
            }
            return await User.findOneAndDelete({_id: user._id});
        } catch (error) {
            throw new Error('UserService.deletar: ' + error);
        }
    }//deletar ()
    static async atualizar (user) {
        try {
            return await User.findByIdAndUpdate (user._id, user);
        } catch (error) {
            throw new Error ('UserService.atualizar: ' + error);
        }
    }//atualizar ();
}
