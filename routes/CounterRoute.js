

module.exports = class CounterRoutes{
    constructor(app){
        app.route("/conter").get(CouterController.getCouter);
    }
}