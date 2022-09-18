"use strict";
const Mongoose = require("mongoose");
const Character = Mongoose.model("../modelo/Character");

module.exports = class CharacterService {
    static async buscarPorId(idItem) {
        try {
            return await Character.findById(idCharacter);
        } catch (error) {
            throw new Error ('CharacterService.findById: '+ error);
        }
    } // buscarPorId ();
    static async buscarTodos () {
        try {
            return await Character.find({});
        }   catch (error) {
            throw new Error('CharacterService.findAll: '+ error);
        }
    }// buscatodos ();
    static async criar(character) {
        try {
            return await Character.create(character);
        } catch (error) {
            throw new Error('CharacterService.criar: ' + error);
        }
    }// criar ()
    static async deletar (character) {
        try {
            if (!character._id) {
                throw new Error('O identificador do personagem deve ser informado. ');
            }
            return await Character.findOneAndDelete({_id: character._id});
        } catch (error) {
            throw new Error('CharacterService.deletar: ' + error);
        }
    }//deletar ()
    static async atualizar (character) {
        try {
            return await Character.findByIdAndUpdate (character._id, character);
        } catch (error) {
            throw new Error ('ItemService.atualizar: ' + error);
        }
    }//atualizar ();
   
}