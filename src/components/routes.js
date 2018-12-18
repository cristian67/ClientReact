import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';

//Componentes propios (Publico)
import Categories from './public/categories/Categories';
import Products from './public/products/Products';


//Componentes propios (Privados)
import Users from './private/users/Users';
import CategoriesLogin from './private/categories/Categories';
import ProductsLogin from './private/products/Products';
import Login from './private/login/Login';


export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div className="contenedor">
                

            {/* Rutas Publica */ }
         

                <Route exact path="/" component={ Products} />
                <Route exact path="/categorias" component={ Categories } />
                <Route exact path="/productos" component={ Products } />

            {/* Rutas Privadas (Login) */ }
            <Route exact path="/login" component = {Login} />
            <Route exact path="/login/usuarios" component={ Users } />
            <Route exact path="/login/categorias" component={ CategoriesLogin } />
            <Route exact path="/login/productos" component={ ProductsLogin } />

        </div>
    
      </Router>
  );
}