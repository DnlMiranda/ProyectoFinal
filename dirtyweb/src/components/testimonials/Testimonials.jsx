import "./testimonials.scss";
import Fade from 'react-reveal/Fade';

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
             <div className="testimonials__title">
             <Fade top>
                <h1 className="title">TESTIMONIALS</h1>
                </Fade>
                     <img className="guion" src="assets/guion.png" alt=""/> 
             </div>
             
             <div className="container">
             <Fade bottom cascade>
                 <div className="card">
                     <div className="card__wrapper">
                        <div className="card__image">
                            <img src="assets/img1.png" className="image__user" alt="" />
                            <img src="assets/stars.png" alt=""  className="image__star"/>
                        </div>
                        <p>“It was my first tattoo and all the moment i feel very comfortable
                        and Miguel has patient”</p>
                        <h1>Daniella Almeida</h1>
                      
                       
                        
                        
                     </div>
                 </div>
                 <div className="card">
                     <div className="card__wrapper">
                        <div className="card__image">
                            <img src="assets/img2.png" className="image__user" alt="" />
                            <img src="assets/stars.png" alt="" />
                        </div>
                        <p>“It was my first tattoo and all the moment i feel very comfortable
                        and Miguel has patient”</p>
                        <h1>John Sanchez</h1>
                      
                       
                        
                        
                     </div>
                 </div>
                 <div className="card">
                     <div className="card__wrapper">
                        <div className="card__image">
                            <img src="assets/img3.png" className="image__user" alt="" />
                            <img src="assets/stars.png" alt="" />
                        </div>
                        <p>“It was my first tattoo and all the moment i feel very comfortable
                        and Miguel has patient”</p>
                        <h1>Cristina Oliveira</h1>
                      
                       
                        
                        
                     </div>
                 </div>
                 </Fade>
             </div>
            
        </div>
    )
}
