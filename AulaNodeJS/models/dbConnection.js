const Sequelize = require('sequelize');


const sequelize = new Sequelize('App', 'postgres', 'Maker@1', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    schema: ''

});


sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso");

}).catch((erro) => {

    console.log(`Falha ao se conectar ${erro}`);
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}