module.exports = class CounterRoute{
    static async getCounter(req, res){
        res.status(200).send(CounterService.getCounter())
    }
}