import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';

//Librerias externas
import ReallySmoothScroll from 'really-smooth-scroll';

//Componentes propios (Publico)
import Footer from './public/Footer/Footer';
import Categories from './public/categories/Categories';
import Products from './public/products/Products';
import Home from './Home/Home';



//Componentes propios (Privados)
import Users from './private/users/Users';
import CategoriesLogin from './private/categories/Categories';
import ProductsLogin from './private/products/Products';
import Login from './private/login/Login';


export const makeMainRoutes = () => {
  return (
      <Router history={history}>
            <React.Fragment>

                  {/* Rutas Publica */ }
              

                  <Route exact path="/" component={ Home} />
                  <Route exact path="/categorias" component={ Categories } />
                  <Route exact path="/productos" component={ Products } />

                  {/* Rutas Privadas (Login) */ }
                  <Route exact path="/login" component = {Login} />
                  <Route exact path="/login/usuarios" component={ Users } />
                  <Route exact path="/login/categorias" component={ CategoriesLogin } />
                  <Route exact path="/login/productos" component={ ProductsLogin } />
                  


                  {/*Footer*/}
                  <Footer />


          </React.Fragment>
      </Router>
  );
}