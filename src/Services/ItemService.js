"use strict";
const Mongoose = require("mongoose");
const Item = Mongoose.model("../modelo/item");

module.exports = class ItemService {

    static async buscarPorId(idItem) {
        try {
            return await Item.findById(idItem);
        } catch (error) {
            throw new Error ('ItemService.findById: '+ error);
        }
    } // buscarPorId ();
    static async buscarTodos () {
        try {
            return await Item.find({});
        }   catch (error) {
            throw new Error('ItemService.findAll: '+ error);
        }
    }// buscatodos ();
    static async criar(item) {
        try {
            return await Item.create(item);
        } catch (error) {
            throw new Error('ItemService.criar: ' + error);
        }
    }// criar ()
    static async deletar (item) {
        try {
            if (!item._id) {
                throw new Error('O identificador do item deve ser informado. ');
            }
            return await Item.findOneAndDelete({_id: item._id});
        } catch (error) {
            throw new Error('ItemService.deletar: ' + error);
        }
    }//deletar ()
    static async atualizar (item) {
        try {
            return await Item.findByIdAndUpdate (item._id, item);
        } catch (error) {
            throw new Error ('ItemService.atualizar: ' + error);
        }
    }//atualizar ();
}
