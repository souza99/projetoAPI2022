"use strict"
const e = require("express");
const mongoose = require("mongoose");
const User = Mongoose.model("User");

module.exports = class UserService {

    static async buscarTodos () {
        try {
            return User.find({});
        }catch(error) {
            throw new error('Usuario serviced' + e.message);
        }
    }


    static getUsers() {
        return { users: users }
    }
    static save(user) {
        users.push(user)
        return { user: user }
    }



   
}