 //Forma nova
 import express from 'express'

//Forma antiga de Importar o Express
//const express = require('express')

 const app = express()

//req = requisição / res = resposta
 app.get('/usuarios', (req, res) => {
    res.send('Legal, deu certo a resposta!')
 
 })

