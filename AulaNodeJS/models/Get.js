const dbConnection = require('./dbConnection');


const Get = dbConnection.sequelize.define('Tabelinhazika', {}, { freezeTableName: true, schema: 'public' });

let returnTable = (req, res) => {
    Get.findAll({
        attributes: [['Nome', 'Name'], ['Idade', 'Yearold']]
        // where: {
        //     Nome: req.params.nome
        // }
    }).then(dados => {

        if(dados.length == 0){

            return res.send('Dado não encontrado');

        }
        
        return res.send({ dados });

    }).catch((erro) => {
        return res.status(500).json({ erro: 'Erro' } + erro);
    });

}

let teste = (res) => {


    return res.send("Teste");
}

module.exports = { returnTable, Get: Get, teste };