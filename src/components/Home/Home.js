import React, { Component } from 'react';
import WhenInView from '../public/WayPoint/WayPoint';

import { Parallax, Background } from 'react-parallax';

import { RevelarContenido ,Titulo , PanelIcon} from './Home.style'

import Navegation from '../public/navegation/Navegation';

import '../../css/animate.css';
import './Home.css';



class Home extends Component {

    componentDidMount(){
      
    }

    render(){
        return(
        <React.Fragment>
            
            <Navegation />
            
    <div>

        {/* -----Parallax Background-----*/}
        <Parallax
            blur={1}
            bgImage={('/img/uno.jpg')}
            bgImageAlt="the cat"
            strength={100}
        >
        <div className="container">
            <div className="row">
                <div className="col s6">
                <h4 className="#a7ffeb teal accent-1 animated fadeInUp delay-1s"> 
                for the LalyMania. </h4>
                <div style={{ height: '400px' }} />
                </div>
            </div>
        </div>         
        </Parallax>
 
 
       
    </div>


            <PanelIcon className="teal lighten-2"> 
                <div className="row">
                    <div className="col s12">
                    <p></p>
                        <button className="btn waves-effect waves-light #0d47a1 blue darken-4 " >
                        
                            <i className="fab fa-facebook-f"></i> Revisa mi Facepage 
                        </button>
                    </div>
                </div>
            </PanelIcon>


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
                    </RevelarContenido>
                }
            </WhenInView>       

            <WhenInView> 
                {({isInView}) =>

                    <RevelarContenido hidden={!isInView} >
                                <div className="card-panel #f50057 pink accent-3 animated fadeInLeft delay-1s">
                                    <div className="row">
                                        <div className="col s12 center-align "><h2>No paso nada</h2></div>
                                        <div className="col s6">Do dolore duis reprehenderit eu exercitation amet sit tempor fugiat eu ex. Ipsum Lorem quis velit deserunt reprehenderit ea fugiat eiusmod duis nisi magna. Irure labore esse consectetur veniam.</div>
                                        <div className="col s6">Enim cupidatat id cillum nostrud. Officia incididunt incididunt ipsum nostrud sit sunt cupidatat nostrud in officia minim est officia magna. Cupidatat sunt voluptate aute commodo fugiat proident incididunt occaecat aliquip aliqua mollit irure anim. Veniam sit laborum sint excepteur nostrud ad nulla consequat aute deserunt. Ad commodo est ullamco nisi veniam minim ea consectetur magna sint. Incididunt ea qui do eiusmod.</div>
                                    </div>
                                </div>        

                    </RevelarContenido>
                }
            </WhenInView>    

              <Parallax
            blur={1}
            bgImage={('/img/dos.jpg')}
            bgImageAlt="the cat"
            strength={300}
        >
        <div className="container">
            <div className="row">
                <div className="col s6">
                <h4 className="#a7ffeb teal accent-1 animated fadeInUp delay-1s"> 
                for the LalyMania. </h4>
                <div style={{ height: '400px' }} />
                </div>
            </div>
        </div>         
        </Parallax>   
                        
        </React.Fragment>
           

        );
    }
}

export default Home;