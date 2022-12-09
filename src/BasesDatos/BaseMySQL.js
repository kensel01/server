//se debe de instalar MySQL en el proyecto antes
//Poner en la terminal "npm install mysql" para instalar
const mysql = require('mysql'); 

//parametros de conexion con MySQL
const conexion = mysql.createConnection({
    host:'localhost',
    database:'ufpc',
    user:'root',
    password:''
});



module.exports= ()=> conexion.connect(function(error){
                    if(error){
                        throw error;
                    }else{
                        console.log('conectado');
                    }
                });