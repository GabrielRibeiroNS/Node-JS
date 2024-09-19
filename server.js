 //Forma nova
 import express from 'express'

//Forma antiga de Importar o Express
//const express = require('express')

 const app = express()

 //Para as informações via JSON chegarem teremos que chamar essa função do Express
 app.use(express.json())

 //Users vai receber as informações do usuários via JSON
 const users = []

 app.post('/usuarios', (req , res) => {

    //console.log(req.body)
    //Pega as informações do vody do JSON e trás para a variavel users via Method Push
    users.push(req.body)

    res.send('ok. aqui deu certo!')

 })

//req = requisição / res = resposta
 app.get('/usuarios', (req, res) => {
    res.send('Legal, deu certo a resposta!')
 
 })

 //Definir a porta onde vai estar o acesso do localhost para buscar no navegador por exemplo:
 //http://localhost:3000/usuarios
 app.listen(3000)


 /*
    Criar nossa API de Usuários

    -Criar um usuário
    -Listar todos os usuários
    -Editar um usuário ou varios
    -Deletar um usuário

    Edited Gabriel Ribeiro

 */
