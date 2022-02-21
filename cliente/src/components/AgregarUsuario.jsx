import React, { useState, useEffect } from 'react'
import Error from './Error'
import uniqid from 'uniqid'
import axios from 'axios'

const AgregarUsuario = ({usuarios, setUsuarios, individuo}) => {


    //States
    const [nombre, setNombre]= useState('')
    const [apellido, setApellido]= useState('')
    const [email, setEmail]= useState('')
    const [telefono, setTelefono]= useState('')
    

     //NUEVO CODIGO
     const [error, setError]= useState(false)

     //UseEffect
     useEffect(() => {
        if( Object.keys(individuo).length > 0  ) {
            setNombre(individuo.nombre)
            setApellido(individuo.apellido)
            setEmail(individuo.email)
            setTelefono(individuo.telefono)
            
        }
    }, [individuo])
     

 

    //guardar Forulario
 const agregarUsuario = (e) => {
     e.preventDefault()

     //VAlidacion del Formulario //NUEVO CODIGO
     if([nombre, apellido, email, telefono].includes('')){
         

         setError(true)

         return;
     }
         setError(false)

         //Objeto de Usuario
         const objetoUsuario = {
            nombre, 
            apellido, 
            email, 
            telefono,
            id: uniqid()
                 
         }

         if(individuo.id){
             //editando Registro
             objetoUsuario.id = individuo.id
            
             const usuarioActualizado = usuarios.map(individuoState => individuoState.id === 
                                                     individuo.id ? objetoUsuario : individuoState )
             
            setUsuarios(usuarioActualizado)                                       

         }else{
             //Nuevo Registro
             objetoUsuario.id = uniqid() 
             setUsuarios([...usuarios, objetoUsuario])
         }



         //Reiniciar el Formulario De Usuarios
         setNombre('')
         setApellido('')
         setEmail('')
         setTelefono('')

    
     let usuario = {
         nombre: nombre,
         apellido: apellido,
         email: email,
         telefono: telefono,
         idusuario: uniqid()
     }
     

     axios.post('/api/usuario/agregarusuario', usuario)
     .then(res =>{
         alert(res.data)
     })
     .then(err =>{console.log(err)})
 }


  return (
    <div className='container'>

        <div className='row'>    
                <h2 className='my-4'>Crear un nuevo usuario</h2>     
        </div>

        <div className='row'>
            <div className='col-sm-5 offset-3 '>
              <div className='text-center'>
              {error &&  <Error mensaje='Todos los campos son obligatorios ' /> }
              </div>
              
                <div className='mb-3 ' >
                    <label htmlFor="nombre" className='form-label'>Nombre</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        value={nombre} 
                        onChange={(e) =>{setNombre(e.target.value)}}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="apellido" className='form-label'>Apellido</label>
                    <input  
                        type="text" 
                        className='form-control' 
                        value={apellido} 
                        onChange={(e) =>{setApellido(e.target.value)}}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input 
                       type="email" 
                       className='form-control'
                       value={email} 
                       onChange={(e) =>{setEmail(e.target.value)} }/>
                </div>

                <div className='mb-3'>
                    <label htmlFor="telefono" className='form-label'>Telefono</label>
                    <input 
                        type="number" 
                        className='form-control'
                        value={telefono} 
                        onChange={(e) =>{setTelefono(e.target.value)}}/>
                </div>

                <input
                        type="submit"
                        onClick={agregarUsuario} 
                        className='btn btn-success'
                        value={individuo.id ? 'Editar Usuario' : 'Guardar Usuario'} >
                            
                </input>
            </div>
        </div>
    </div>
  )


}

export default AgregarUsuario