import React, { Component } from 'react';
import Navegation from '../navegation/Navegation';

class Products extends Component {
    render(){
        return(
        <React.Fragment>
            <Navegation />
            <div>desde Productos</div>
        </React.Fragment>
        )
    }
}

export default Products;