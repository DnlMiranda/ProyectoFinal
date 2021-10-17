import "./barra.scss"

export default function Contact() {
    return (
            <div className="barra">
                 
                <div className="barra__dos">
                        <div className="barra__cuerpo">
                            <figure  >
                                <img src="assets/tattoo.png" alt=""  className="img__icon" />
                            </figure>
                            <div className="texto">
                                <span> TATTOO </span>
                                <p>Best tattoo experience, our priority <br/>
                                is your comfort, Tel the story behind</p>
                            </div>
                           
                        </div>
                        <div className="barra__cuerpo">
                            <figure>
                                <img src="assets/piercings.png" alt="" className="img__icon"/>
                            </figure>
                            <div className="texto">
                                <span> PIERCINGS </span>
                                <p>Your security is our priority, with
                                all <br/>cares.</p>
                            </div>
                        </div>
                        <div className="barra__cuerpo">
                            <figure>
                                <img src="assets/shop.png" alt="" className="img__icon"/>
                            </figure>
                            <div className="texto">
                            <span> SHOP </span>
                                <p>Find the best products with high <br/>quality and exclusives piercings</p>
                            </div>
                        </div>
                </div>
               
            </div>
    )
}