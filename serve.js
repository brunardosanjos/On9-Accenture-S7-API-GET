const express = require('express');
const app = express();
const porta = 3000;
const women = require('./women.json')

app.use(express.json());

app.get('/women', function(requisicao, resposta){
    resposta.json(women);
});

app.get("/women/:id", function(requisicao, resposta){

    const {id} = requisicao.params
    const selecaoWomen = women.find(selecaoWomen => selecaoWomen.id == id)
    resposta.json(selecaoWomen);
});

app.listen(porta, function(){
    console.log("servidor rodando")
});
