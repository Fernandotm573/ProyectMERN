const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/mernstack')

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion Correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en al Conexion  a MongoDB')})

module.exports =  mongoose