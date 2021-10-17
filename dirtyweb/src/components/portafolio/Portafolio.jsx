import "./portafolio.scss"
import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Portafolio() {
    return (
        <div className="portafolio" id="portafolio"> 
            <div className="piercings">
                <div className="piercings__texto">
                    <img src="assets/pier.png" alt=""/>
                    <div className="piercings__botones">
                        <button>
                            RESERVA TU CITA
                        </button>
                        <button>
                            VER EN SHOP
                        </button>
                    </div>
                </div>
            </div>
            <div className="contacto">
            <div className="primero">
            <Fade bottom cascade>
                <div className="datos">
                    <div className="dato">
                        <img src="assets/ubicacion.png" alt=""/>
                        <p>Calle Rivera de Ustaris 225 <br/>
                            Jesús María - Lima </p>
                            <a href="https://g.page/dirtyinktattoostudio?share" target="_blank" rel="noreferrer">
                                <span>VER EN EL MAPA</span>
                            </a>
                    </div>
                    <div className="dato">
                        <img src="assets/reloj.png" alt=""/>
                        <p>TATTOO STUDIO : LUN - DOM 10 - 9PM</p>
                        <p>PIERCING STUDIO : MIE - SAB 10 - 8PM</p>
                       
                       
                    </div>
                    <div className="dato">
                    <img src="assets/phone-call (1).png" alt=""/>
                        <p>+51 972 145 640</p>
                        <a href="https://wa.link/g8bkyj" target="_blank" rel="noreferrer">
                                     <span>IR AL WHATSAPP</span>
                            </a>
                    </div>
                </div>
                </Fade>
                <div className="redes__sociales">
                    <ul className="red__social">
                        <li className="redes__icons">
                             <a href="https://www.facebook.com/dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                <img src="assets/facebooke.png" alt=""/>
                            </a>
                        </li>
                        <li className="redes__icons">
                            <a href="https://www.instagram.com/dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                <img src="assets/instagrame.png" alt=""/>
                            </a>
                        </li>
                        <li className="redes__icons">
                            <a href="https://www.tiktok.com/@dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                <img src="assets/tiktoke.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>


            
        
        </div>
    )
}
