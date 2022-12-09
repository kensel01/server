const mongoose = require('mongoose');
const {Schema} = mongoose;

//estructura o esquema de datos de la tabla Comentario
const ComSchema = new Schema({
    ComID:Number,
    UserID:Number,
    VideoID: Number,
    Comentario:String
});

const ComModel = mongoose.model('comentarios',ComSchema);

module.exports = ComModel;
