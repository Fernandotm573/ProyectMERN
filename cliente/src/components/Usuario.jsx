

const Usuario = ({ usuario1, setIndividuo, individuo, eliminarUsuario}) => {

const {nombre, apellido, email, telefono, id} = individuo

const handleEliminar = () => {
  // eslint-disable-next-line no-restricted-globals
  const respuesta = confirm('Deseas eliminar este usuario?')
  if(respuesta){
    eliminarUsuario(id)
  }
}


  return (
    <div className='container'>
       <div className='col-sm-5 offset-3 bg-secondary text-dark '>
            <p>Nombre: {' '}
                <span>{nombre} </span>
            </p>
            <p>Apellido: {' '}
                <span>{apellido} </span>
            </p>
            <p>Email: {' '}
                <span>{email} </span>
            </p>
            <p>Telefono: {' '}
                <span>{telefono} </span>
            </p>
            <p>Id: {' '}
                <span>{id} </span>
            </p>

            

            <div className='card-body d-flex justify-content-between align-items-center'>
                 <button 
                     type="button"
                     className='btn btn-dark py-3 px-5 '
                     onClick={()=> setIndividuo(individuo)}
                     >
                  Editar
                 </button>

                 <button 
                      type="button"
                      className="btn btn-danger py-3 px-5"
                      onClick={handleEliminar}
                      >
                   Eliminar
                 </button>  
            </div>   
            
            <hr />   
       </div>

    </div>

  )
}

export default Usuario