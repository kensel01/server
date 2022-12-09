const express = require('express');
const app =  express();
//const path = require('path');



/* Codigo para iniciar Archivos HTML 
app.use(express.static(path.join(__dirname,'../public')))

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
*/

//Establese la ruta de puerto en el localhost
const puerto = 3000;
app.use(require('./rutas/rutas'))
//espera a que se ingrese al navegador con el puerto especificado
app.listen(puerto, ()=>{
    console.log('esperando...')
})

