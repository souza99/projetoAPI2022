"use strict";
const Mongoose = require("mongoose");
const Ability = Mongoose.model("../modelo/Ability");

module.exports = class AbilityService {
    static async buscarPorId(idAbility) {
        try {
            return await Ability.findById(idAbility);
        } catch (error) {
            throw new Error('ItemService.findById: ' + error);
        }
    } // buscarPorId ();
    static async buscarTodos() {
        try {
            return await Ability.find({});
        } catch (error) {
            throw new Error('AbilityService.findAll: ' + error);
        }
    }// buscatodos ();
    static async criar(ability) {
        try {
            return await Ability.create(ability);
        } catch (error) {
            throw new Error('AbilityService.criar: ' + error);
        }
    }// criar ()
    static async deletar(ability) {
        try {
            if (!ability._id) {
                throw new Error('O identificador da habilidade deve ser informado. ');
            }
            return await Ability.findOneAndDelete({ _id: ability._id });
        } catch (error) {
            throw new Error('abilityService.deletar: ' + error);
        }
    }//deletar ()
    static async atualizar(ability) {
        try {
            return await Ability.findByIdAndUpdate(ability._id, ability);
        } catch (error) {
            throw new Error('AbilityService.atualizar: ' + error);
        }
    }//atualizar ();

}