const db  = require('../../banco/db_conexao');

module.exports = class PortfolioModel{

    static getTodos(callback){
        return db.query("SELECT * FROM portfolio",callback)
    }

    static getId(id,callback){
        return db.query("SELECT * FROM portfolio WHERE id_portfolio = ?",[id],callback)
    }

    static adicionar(portfolio,callback){
        return db.query("INSERT INTO portfolio (descricao,detalhes) VALUES(?,?)",
        [portfolio.descricao,portfolio.detalhes],callback)
    }

}