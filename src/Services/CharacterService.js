var characters = [];
module.exports = class CharacterService {
    static getCharacters() {
        return { characters: characters }
    }
    static save(character) {
        characters.push(character)
        return { characters: characters }
    }
   
}