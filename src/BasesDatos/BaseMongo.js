const mongoose = require('mongoose');
                              //:puerto/Nombre de la base
const uri = `mongodb://localhost:27017/UFPC`;//direccion de la base de datos

module.exports = ()=>   mongoose.connect(uri,{
                            useNewUrlParser   : true,
                            useUnifiedTopology: true
                        });