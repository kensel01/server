const controller = {};

const connectionMongo = require('../BasesDatos/BaseMongo');
const connectionsql = require('../BasesDatos/BaseMySQL');
//Si las tablas de la base no estan creadas, el codigo las creara automaticamente
//segun el esquema y modelo asignados en estos 3 codigos
const Usuario = require('../models/Usuario.model');
const Capsulas = require('../models/Capsulas.model');
const Comentario = require('../models/Comentarios.model');


controller.index = async (req,res)=>{
    try{
        //res.send('BIENVENIDO A ESTA PAGINA') //Mensaje en navegador
        await connectionMongo()
        console.log('conectado a MongoDB')
        const msql = await connectionsql()
        msql.connect()
        console.log('conectado a MySQL')
        msql.query(/*aqui se pueden colocar consultas en MySQL*/)
        
        const Usuarios = await Usuario.find();//Se obtiene los datos de la DB sobre Usuarios
        const Capsula = await Capsulas.find();//Se obtiene los datos de la DB sobre Capsulas
        const Comentarios = await Comentario.find();//Se obtiene los datos de la DB sobre Comentarios
        Usuario.create({//aqui va lo mismo del esquema, pero con valores ya definidos
        })
        console.log(Usuarios);
        console.log(Capsula);
        console.log(Comentarios);
    }catch(err){
        console.error(err)
    }
}

module.exports = controller