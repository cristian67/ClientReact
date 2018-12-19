import React from 'react';
import {NavLink , Link} from 'react-router-dom';
 
const Navegacion = () => {
    
    return(
        <nav className="nav-wrapper #004d40 teal darken-4 ">
            <div className="container">
                <Link className="brand-slogo" to={`/`}>Lalymania </Link>
                <Link to={`#`} data-target="menu-responsive" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </Link>


                <ul className="right hide-on-med-and-down"> 
                    <li><NavLink to={`/`} activeClassName='activo'> Home </NavLink></li>
                    <li><NavLink to={`/categorias`} activeClassName='activo' > categorias </NavLink></li>
                    <li><NavLink to={`/`} activeClassName='activo'>  productos </NavLink></li>
                </ul>   
            
            </div>


            <ul id="menu-responsive" className="sidenav #880e4f pink darken-4 ">
                    <li><NavLink to={`/`} activeClassName='activo'> Home </NavLink></li>
                    <li><NavLink to={`/categorias`} activeClassName='activo' > categorias </NavLink></li>
                    <li><NavLink to={`/productos`} activeClassName='activo'>  productos </NavLink></li>
            </ul>
        </nav>

        


    )
}
export default Navegacion;