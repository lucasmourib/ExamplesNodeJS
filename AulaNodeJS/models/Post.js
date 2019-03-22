const dbConnection = require('./dbConnection');

const Post = dbConnection.sequelize.define('postagens', {

    nome: { type: dbConnection.Sequelize.STRING },
    idade: { type: dbConnection.Sequelize.INTEGER }

});

module.exports = Post;