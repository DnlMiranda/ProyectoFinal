import './footer.scss';

import React from 'react'

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="footer__wrapper">
                <div className="footer__uno">
                    <div className="bloque">
                        <img src="assets/logo.png" alt=""/>
                        <p>Calle Rivero de Ustaris 225 <br/>
                            Jesus Maria - Lima <br/>
                            +51 972 145 640 <br/>
                            info@dirtyinktattoo.com
                        </p>
                        <ul className="red">
                            <li>
                            <a href="https://www.facebook.com/dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                    <img src="assets/facebooke.png" alt=""/>
                                </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                    <img src="assets/instagrame.png" alt=""/>
                                </a>
                            </li>
                            <li>
                            <a href="https://www.tiktok.com/@dirtyinktattoostudio" target="_blank" rel="noreferrer">
                                    <img src="assets/tiktoke.png" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bloque">
                        <div>
                            <img src="assets/reloje.png" alt=""/>
                        </div>
                        <p>
                            TATTOO STUDIO : LUN - DOM 10 - 9PM <br/>
                            PIERCING STUDIO : MIE - SAB 10 - 8PM
                        </p>   
                    </div>
                    <div className="bloque">
                        <span>QUIERES RECIBIR LAS <br/> 
                        MEJORES PROMOCIONES?</span> <br/>
                        <input type="text" placeholder="Escribe tu e-mail"/> <br/>
                        <input id="boton" type="submit" value="SUSCRIBETE"/>
                    </div>
                </div>
                <div className="footer__dos">
                    <div>
                         <p>2021 Dirty Ink Tattoo studio</p>
                    </div>
                    <div>
                         <p>Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
