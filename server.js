const express = require('express')
const app  = express()

//Importar conexion MongoDB
const archivoBD = require('./conexion')

//Importacion del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

//Importar Body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/api/usuario', rutausuario) 

app.get('/', (req, res) =>{  
    res.end('SERVIDOR BACKEND CORRIENDO con NodeJS') 
}) 
    

//configuaracion server basico
app.listen(5000, ()=>{
    console.log(`EL SERVIDOR ESTA CORRIENDO EN EL PUERTO ${5000}`)

}) 