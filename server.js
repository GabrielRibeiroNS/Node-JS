 //Forma nova
 import express from 'express'

//Forma antiga de Importar o Express
//const express = require('express')

 const app = express()

 //Definir a porta onde vai estar o acesso do localhost para buscar no navegador por exemplo:
 //http://localhost:3000/usuarios
 app.listen(3000)

 //Para as informações via JSON chegarem teremos que chamar essa função do Express
 app.use(express.json())

 //Users vai receber as informações do usuários via JSON
 const users = []

 //Essa função Registra as informações que vem via JSON na Const USERS através do PUSH que puxa essas informações e damos uma resposta mostrando o Status e mostrando as informações.
 app.post('/usuarios', (req , res) => {

    //console.log(req.body)
    //Pega as informações do body do JSON e trás para a variavel users via Method Push
    users.push(req.body)

    res.status(201).json(req.body)
    //Status 201 = Deu tudo certo e Foi criado oque foi pedido para Criar

    //res.send('ok. aqui deu certo!')

 })

            //req = requisição / res = resposta

 //Essa Função mostra as informações via Method GET registradas na Const USERS e mostra o Status se deu certo ou não.         
 app.get('/usuarios', (req, res) => {
    //res.send('Legal, deu certo a resposta!')

    //Manda a Resposta em formato JSON da variavel Users
    res.status(200).json(users)
    //Status 200 = Tudo OK
    
 })



 /*
    Criar nossa API de Usuários

    -Criar um usuário
    -Listar todos os usuários
    -Editar um usuário ou varios
    -Deletar um usuário

    Edited Gabriel Ribeiro
    Hoje Vou criar minha conta no MongoDB Para as informações do JSON serem mandadas para lá e perssistirem la, pois ao recareegar a pagina e o servidor elas se perdem.

 */
