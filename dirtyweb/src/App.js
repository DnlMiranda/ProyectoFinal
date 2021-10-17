import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Barra from "./components/barra/Barra";
import Portafolio from "./components/portafolio/Portafolio";
import Artist from "./components/artist/Artist";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from"./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";


import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import Portfolio from "./components/Portfolio/Portfolio";



const App = () => { 

  
  
  //estado para el boton de menu
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
      <Intro/>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
        
        
        
        <Slider 
          style={{height: "85vh"}}
          images={[image1, image2, image3]}
          >
             <div className="logo"  href="">
                <a href="https://www.facebook.com/dirtyinktattoostudio" target="_blank" rel="noreferrer"> 
                    <img src="./assets/logon.png"  alt="" />
                </a>
                </div>

               
               
          </Slider>
         <Barra/>
         
        <Artist/>
        <Portfolio/>
        <Portafolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      
    </>
      
      
  );
}

export default App;


