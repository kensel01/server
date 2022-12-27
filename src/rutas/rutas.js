const express = require('express')

const router = express.Router()
//Inicia los procesos de enrutamiento de la aplicacion
const controller = require('../control/controlador')

router.get('/', controller.index)

module.exports = router