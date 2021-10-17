// import React from 'react'
import "./contact.scss"


export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact__section">
                <div className="banner__bg">
                    <div className="contact__title">
                        <h1>CONTACT US</h1>
                        <img className="guion" src="assets/guion.png" alt=""/>
                    </div>    
                    <form className="contact__form" action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="e-mail" />
                        <input type="text" placeholder="message"/>
                        <input type="submit" placeholder="ENVIAR" id="boton" />
                    </form>
                </div>
                {/* <div className="figure">
                     <img src="assets/tat.png" alt="" /> 
                </div>           */}
                <div className="contact__banner">
                    <div className="banner__wrapper">
                        <div className="barra__icon">
                            <img src="assets/tattoer.png" alt="" />
                        </div>
                        <div className="barra__icon">
                            <img src="assets/pircier.png" alt="" />
                        </div>
                        <a href="https://wa.link/g8bkyj" target="_blank" rel="noreferrer">
                            <button id="button" >RESERVA TU CITA</button>
                            </a>
                        
                        <div className="barra__icon">
                            <img src="assets/tienda.png" alt="" />
                        </div>
                        <div className="barra__icon">
                            <img src="assets/diamonde.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>  
        
        </div>
    )
}
