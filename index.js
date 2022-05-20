const mysql = require('mysql');
const cors = require('cors');
const express = require('express');

const app = express();

const db = mysql.createConnection({
    host: "ec2-18-217-160-132.us-east-2.compute.amazonas.com",
    user: "root",
    password: "root",
    database: "aula"
});

db.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log("Conectado ao Banco");
})

app.listen(3000,()=>{console.log('Servidor Iniciado')});