const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    apellido: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router


       //AGREGAR USUARIO
router.post('/agregarusuario', (req, res) =>{
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,    
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario Agregado Correctamente')
        }else{
            res.send(err)
        }
    })
})


//OBTENER TODOS LOS USUARIOS
router.get('/obtenerusuarios', (req, res)=>{
    ModeloUsuario.find({}, (docs, err)=>{
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})