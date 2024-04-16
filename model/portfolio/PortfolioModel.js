const db  = require('../../banco/db_conexao');

module.exports = class PortfolioModel{

    static getTodos(callback){
        return db.query("SELECT * FROM portfolio",callback)
    }

}