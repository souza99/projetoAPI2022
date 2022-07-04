var abilitys = [];
module.exports = class AbilityService {
    static getAbilitys() {
        return { abilitys: abilitys }
    }
    static save(ability) {
        abilitys.push(ability)
        return { ability: ability }
    }
   
}