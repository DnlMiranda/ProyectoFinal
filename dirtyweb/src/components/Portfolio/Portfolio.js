import React, { useState, useEffect } from 'react';
import Categorias from '../Categorias';
import Tattoos from '../Tattoos';
import { getCategorias } from '../../services/categorias';
import { getTattoos } from '../../services/tattoos';

import Fade from 'react-reveal/Fade';
// import DirtyCategorias from '../DirtyCategorias/DirtyCategorias';
// import DirtyEstilos from '../DirtyEstilos/DirtyEstilos';

import "./portfolio.scss"


const Portfolio = () => {
    const[categorias, setCategorias] = useState([]);
    const[tattoos, setTattoos] = useState([]);
    /*version inicial que se MUESTREN TODAS LAS IMAGENES, ya que no he seleccionado ninguna categoria */
    const[categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  
    const seleccionarCategoria = (categoria_id) => {
      setCategoriaSeleccionada(categoria_id);
  
    }

   
    


  
  
    useEffect(()=>{
      getCategorias().then((rpta)=>{
        getTattoos().then((rpta2)=>{
          setCategorias(rpta.data);
          setTattoos(rpta2.data);
        })
      })
      // const traerTodo = async () => {
      //   let rpta1 = await getCategorias();
      //   let rpta2 = await getTattoos();
      //   setCategorias(rpta1.data);
      //   setTattoos(rpta2.data);
      // };
      // traerTodo();
    },[]);

    // const [selected,setSelected] = useState("cover");
    // const [data, setData] = useState([]);

    // const list = [
    //     {
    //         id: "cover",
    //         title: "Cover up",
    //     },
    //     {
    //         id: "black",
    //         title: "Blackwork", 
    //     },
    //     {
    //         id: "dot",
    //         title: "Dotwork", 
    //     },
    //     {
    //         id: "aqua",
    //         title: "Acuarela", 
    //     },  
    //     {
    //         id: "blackgrey",
    //         title: "Black & grey", 
    //     },
  
    // ];
    
    // useEffect(()=> {

    //     switch(selected){
    //             case "cover":
    //             setData(coverPortfolio);
    //             break;
    //             case "black":
    //             setData(blackPortfolio);
    //             break;
    //             case "dot":
    //             setData(dotPortfolio);
    //             break;
    //             case "aqua":
    //             setData(aquaPortfolio);
    //             break;
    //             case "blackgrey":
    //             setData(blackgreyPortfolio);
    //             break;
    //             default:
    //                 setData(coverPortfolio);
    //     }

    // },[selected]);

    return(
        <div className="portfolio" id="portfolio">
            <Fade top>
             <div className="portfolio__title">
                <h1 className="title">PORTAFOLIO</h1>
                {/* <img className="guion" src="assets/guion.png" alt=""/> */}
             </div>
             </Fade>
            {/* <DirtyCategorias/>
            <DirtyEstilos/> */}
            
                
                    <Categorias 
                        categorias={categorias} 
                        seleccionarCategoria={seleccionarCategoria}
                        categoriaSeleccionada={categoriaSeleccionada}
                    />
                
                
                <Tattoos 
                    tattoos={tattoos}
                    categoriaSeleccionada={categoriaSeleccionada}
                />
                
            
          
        </div>
    )
}

export default Portfolio