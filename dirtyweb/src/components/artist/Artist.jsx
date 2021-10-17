import React from 'react';
import Fade from 'react-reveal/Fade';
import "./artist.scss"

export default function Artist() {
    return (
        <div className="artist" id="artist">
            
            
            <div className="artist__title">
            
                <h1 className="title">TATTOO ARTIST</h1>
                <img className="guion" src="assets/guion.png" alt=""/>
            </div>
          
           <div className="artist__banner">
                <Fade left>
                <div className="banner__hijo">
                    <div className="figura">
                        
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="banner__hijo">
                    <div className="nombre">


                        <div className="nombre__titulo">
                            {/* <div className="miguel">
                                <span>MIGUEL</span>
                            </div> */}
                            <img className="images"
                            src="assets/casas.png" alt=""/>
                        </div>
                        <div className="last">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                                Donec eget placerat purus, vitae
                                bibendum est. Donec at
                            </p>
                            <div className="boton__portafolio">
                                <button href="#portafolio"> VER PORTAFOLIO </button>
                            </div>
                        </div>
                    </div>

                </div>
                </Fade>



            </div>
        </div>
    )
}
