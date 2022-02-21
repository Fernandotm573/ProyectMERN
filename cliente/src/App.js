import React, { useState } from 'react'
import AgregarUsuario from './components/AgregarUsuario';
import ListaUsuarios from './components/ListaUsuarios';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

  const [usuarios, setUsuarios]= useState([])
  const [individuo, setIndividuo] = useState({})


   //FUNCION DE Eliminar
   const eliminarUsuario = (id) =>{
      const individuosActualizados = (usuarios.filter(individuo => individuo.id !== id))
      setUsuarios(individuosActualizados)
   }

  return (
  
    <div className='App'>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="us">Crud MERN stack</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
             aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        <li className="nav-item">
          <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
        </li>


      </ul>
    
    </div>
  </div>
</nav>

        <AgregarUsuario 
                  usuarios={usuarios}
                  setUsuarios={setUsuarios}
                  individuo={individuo}
                 />

        <ListaUsuarios 
                  usuarios={usuarios} 
                  setIndividuo={setIndividuo}
                  eliminarUsuario={eliminarUsuario}
                  />
        

{/*
        <Router>      
        <Routes>
             <Route path='/'                element={<ListaUsuarios   
                                                         listausuarios={listausuarios} 
                                                           />} />
             <Route path='/agregarusuario'  element={<AgregarUsuario 
                                                          listausuarios={listausuarios}
                                                          setListaUsuarios={setListaUsuarios}
                                                              /> } />                                                     
        </Routes>
    </Router>
*/}



    </div>

     
  );
}

export default App;


 
