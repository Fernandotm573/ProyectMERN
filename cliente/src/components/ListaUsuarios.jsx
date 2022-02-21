
import Usuario from './Usuario'


const   ListaUsuarios = ({usuarios, setIndividuo, eliminarUsuario}) => {



 return (
    <div className='container'>
        <div className="row  text-danger ">
              <h2>Lista Usuarios</h2> 
              <div className='col-sm-5 offset-3 bg-light text-primary'>
              {usuarios && usuarios.length ? 
                      'Si Hay usuarios registrados' : 
                      'No hay usuarios registrados' }
              </div>
             
        </div>

        <div className='row'>

             {usuarios.map((individuo)=>(
                 
                   <Usuario 
                       key= {individuo.id}
                       individuo={individuo} 
                       setIndividuo={setIndividuo}
                       eliminarUsuario={eliminarUsuario}
                        />             
             ))}    
    
    </div>         
  </div>

  )

}  
      

export default ListaUsuarios