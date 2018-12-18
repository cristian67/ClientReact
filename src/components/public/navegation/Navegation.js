import React from 'react';
import {NavLink} from 'react-router-dom';
 
const Navegacion = () => {
    
    return(
        <nav className="nav-wrapper">
            <NavLink to={`/`} activeClassName='activo'> Home </NavLink>
            <NavLink to={`/categorias`} activeClassName='activo' > categorias </NavLink>
            <NavLink to={`/productos`} activeClassName='activo'>  productos </NavLink>
        </nav>
    )
}
export default Navegacion;