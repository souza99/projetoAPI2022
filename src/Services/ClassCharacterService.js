const ClassCharacterRoute = require("../routes/ClassCharacterRoute");

var classCharacters = [];
module.exports = class ClassCharacterService {
    static getClassCharacters(){
        return { classCharacters: classCharacters }
    }

    static save(classCharacter){
        classCharacter.push(classCharacter)
        return {classCharacter: classCharacter}
    }
}
