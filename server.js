 //Forma nova
 import express from 'express'

//Forma antiga de Importar o Express
//const express = require('express')

 const app = express()

//req = requisição / res = resposta
 app.get('/usuarios', (req, res) => {
    res.send('Legal, deu certo a resposta!')
 
 })

 //Definir a porta onde vai estar o acesso do localhost para buscar no navegador por exemplo:
 //http://localhost:3000/usuarios
 app.listen(3000)