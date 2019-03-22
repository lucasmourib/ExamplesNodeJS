'use strict'

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Get = require('./models/Get');
const Post = require('./models/Post');

//recebe os dados via rota
app.use(bodyParser.urlencoded({ extended: false }));

//recebe os dados via json
app.use(bodyParser.json());


//  let returnTable = (req,res) => {
//     Get.findAll({
//         attributes: ['Nome', 'Idade']
//     }).then(dados => {
//         return res.send(dados);
//     }).catch(() => {
//         return res.status(500).json({ erro: 'Erro' });
//     });
// }

app.get('/pesquisa/:nome', (req, res) => {

    Get.returnTable(req, res);   

});

app.get('/teste', (req,res)=>{
    Get.teste(res);
});

app.post('/add', (req, res) => {
    Post.create({
        nome: req.body.nome,
        idade: req.body.idade
    })
        .then(() => {
            res.send("Post criado com sucesso");
        })
        .catch((erro) => {
            res.send(`Erro ao gerar post ${erro}`);
        });
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");

});

app.get("/Sobre", (req, res) => {
    console.log(req.params);
    res.send(process.env.ComSpec);
});

app.get("/Contato", (req, res) => {
    res.send({
        Nome: "teste",
        Telefone: "99 9999999"
    });
});

app.get('/ola/:nome/:cargo', (req, res) => {
    res.send(`Ola ${req.params.nome} ${req.params.cargo}`);

});

app.post('/rota', (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

app.post('/json', (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

app.listen(8081, () => {
    console.log("Servidor rodando em http://localhost8081");
});