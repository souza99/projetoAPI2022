var itens = [];
module.exports = class ItemService {
    static getUsers() {
        return { itens: itens }
    }
    static save(item) {
        itens.push(item)
        return { item: item }
    }

}
