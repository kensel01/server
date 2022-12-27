const mongoose = require('mongoose');
const {Schema} = mongoose;

//estructura o esquema de datos de la tabla Ususario
const UserSchema = new Schema({
    UserID: Number,
    Nombre: String,
    Correo: String,
    Password: String,
    Telefono: String,
    EsAdmin: Boolean
});

const UserModel = mongoose.model('Usuarios',UserSchema);

module.exports = UserModel;
