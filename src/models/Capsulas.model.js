const mongoose = require('mongoose');
const {Schema} = mongoose;

//estructura o esquema de datos de la tabla Capsulas
const VideoSchema = new Schema({
    VideoID: Number,
    UserID: Number,
    Vitrina: Boolean,
    Link: String,
    Descripcion: String,
    Vistas: Number
});

const VideoModel = mongoose.model('capsula',VideoSchema);

module.exports = VideoModel;
