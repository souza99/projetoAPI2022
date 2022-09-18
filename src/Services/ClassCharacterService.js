const ClassCharacterRoute = require("../routes/ClassCharacterRoute");


"use strict";
const Mongoose = require("mongoose");
const ClassCharacter = Mongoose.model("ClassCharacterService");

module.exports = class ClassCharacterService {

    static async buscarPorId(idClassCharacter) {
        try {
            return await ClassCharacterService.findById(idClassCharacter);
        } catch (error) {
            throw new Error ('ClassCharacter.findById: '+ error);
        }
    } // buscarPorId ();
    static async buscarTodos () {
        try {
            return await ClassCharacterService.find({});
        }   catch (error) {
            throw new Error('ClassCharacter.findAll: '+ error);
        }
    }// buscatodos ();
    static async criar(classCharacter) {
        try {
            return await ClassCharacterService.create(classCharacter);
        } catch (error) {
            throw new Error('ClassCharacter.criar: ' + error);
        }
    }// criar ()
    static async deletar (classCharacter) {
        try {
            if (!classCharacter._id) {
                throw new Error('A identificação da classe deve ser informar. ');
            }
            return await ClassCharacter.findOneAndDelete({_id: classCharacter._id});
        } catch (error) {
            throw new Error('ClassCharacter.deletar: ' + error);
        }
    }//deletar ()
    static async atualizar (classCharacter) {
        try {
            return await ClassCharacter.findByIdAndUpdate (classCharacter._id, classCharacter);
        } catch (error) {
            throw new Error ('ClassCharacter.atualizar: ' + error);
        }
    }//atualizar ();
}
