import React, { Component } from 'react';
import WhenInView from '../public/WayPoint/WayPoint';

import { RevelarContenido } from './Home.style'

import '../../css/animate.css';



class Home extends Component {
    render(){
        return(
        <React.Fragment>
            <WhenInView> 
                {({isInView}) =>

                    <RevelarContenido hidden={!isInView} >
                                <div className="card-panel #f50057 pink accent-3 animated fadeInRight delay-1s">
                                    <div className="row">
                                        <div className="col s12 center-align "><h2>No paso nada</h2></div>
                                        <div className="col s6">Do dolore duis reprehenderit eu exercitation amet sit tempor fugiat eu ex. Ipsum Lorem quis velit deserunt reprehenderit ea fugiat eiusmod duis nisi magna. Irure labore esse consectetur veniam.</div>
                                        <div className="col s6">Enim cupidatat id cillum nostrud. Officia incididunt incididunt ipsum nostrud sit sunt cupidatat nostrud in officia minim est officia magna. Cupidatat sunt voluptate aute commodo fugiat proident incididunt occaecat aliquip aliqua mollit irure anim. Veniam sit laborum sint excepteur nostrud ad nulla consequat aute deserunt. Ad commodo est ullamco nisi veniam minim ea consectetur magna sint. Incididunt ea qui do eiusmod.</div>
                                    </div>
                                </div>        
                
                                <div className="card-panel teal #2196f3 blue animated  fadeInLeft delay-1s">
                                    <div className="row">
                                        <div className="col s12 center-align"><h2>This div is 12-columns wide on all screen sizes</h2></div>
                                        <div className="col s6">Do dolore duis reprehenderit eu exercitation amet sit tempor fugiat eu ex. Ipsum Lorem quis velit deserunt reprehenderit ea fugiat eiusmod duis nisi magna. Irure labore esse consectetur veniam.</div>
                                        <div className="col s6">Enim cupidatat id cillum nostrud. Officia incididunt incididunt ipsum nostrud sit sunt cupidatat nostrud in officia minim est officia magna. Cupidatat sunt voluptate aute commodo fugiat proident incididunt occaecat aliquip aliqua mollit irure anim. Veniam sit laborum sint excepteur nostrud ad nulla consequat aute deserunt. Ad commodo est ullamco nisi veniam minim ea consectetur magna sint. Incididunt ea qui do eiusmod.</div>
                                    </div>
                                </div>     
                    </RevelarContenido>
                }
            </WhenInView>       

            <WhenInView> 
                {({isInView}) =>

                    <RevelarContenido hidden={!isInView} >
                                <div className="card-panel #f50057 pink accent-3 animated fadeInRight delay-1s">
                                    <div className="row">
                                        <div className="col s12 center-align "><h2>No paso nada</h2></div>
                                        <div className="col s6">Do dolore duis reprehenderit eu exercitation amet sit tempor fugiat eu ex. Ipsum Lorem quis velit deserunt reprehenderit ea fugiat eiusmod duis nisi magna. Irure labore esse consectetur veniam.</div>
                                        <div className="col s6">Enim cupidatat id cillum nostrud. Officia incididunt incididunt ipsum nostrud sit sunt cupidatat nostrud in officia minim est officia magna. Cupidatat sunt voluptate aute commodo fugiat proident incididunt occaecat aliquip aliqua mollit irure anim. Veniam sit laborum sint excepteur nostrud ad nulla consequat aute deserunt. Ad commodo est ullamco nisi veniam minim ea consectetur magna sint. Incididunt ea qui do eiusmod.</div>
                                    </div>
                                </div>        
                
                                <div className="card-panel teal #2196f3 blue animated  fadeInLeft delay-1s">
                                    <div className="row">
                                        <div className="col s12 center-align"><h2>This div is 12-columns wide on all screen sizes</h2></div>
                                        <div className="col s6">Do dolore duis reprehenderit eu exercitation amet sit tempor fugiat eu ex. Ipsum Lorem quis velit deserunt reprehenderit ea fugiat eiusmod duis nisi magna. Irure labore esse consectetur veniam.</div>
                                        <div className="col s6">Enim cupidatat id cillum nostrud. Officia incididunt incididunt ipsum nostrud sit sunt cupidatat nostrud in officia minim est officia magna. Cupidatat sunt voluptate aute commodo fugiat proident incididunt occaecat aliquip aliqua mollit irure anim. Veniam sit laborum sint excepteur nostrud ad nulla consequat aute deserunt. Ad commodo est ullamco nisi veniam minim ea consectetur magna sint. Incididunt ea qui do eiusmod.</div>
                                    </div>
                                </div>     
                    </RevelarContenido>
                }
            </WhenInView>       
                        
        </React.Fragment>
           

        );
    }
}

export default Home;