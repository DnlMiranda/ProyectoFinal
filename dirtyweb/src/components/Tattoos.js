import React from 'react'
import Fade from 'react-reveal/Fade';
import "./tattoos.scss"

const Tattoos = ({ tattoos, categoriaSeleccionada }) => {

    //1.hacer copia de los tattoos
    //2.si la categoriaSeleccionada existe (es diferente de null)
    //filtrar la copia de los tattoos y mostrar dicha copia

    //1.sacandole una copia a la lista de tattoos
    let tattoosRender = [...tattoos];

    // 2.verificar si la categoriaSeleccionada existe (es diferente de null)
    if(categoriaSeleccionada !== null) {
        tattoosRender = tattoosRender.filter((p)=>{
            if (p.categoria_id === +categoriaSeleccionada) {
                return p;
            }
        })
    }

    return (
        <Fade bottom>
        <div className="row">
            
            {tattoosRender.map((objTattoo)=>{
                return  <div className="col-md">
                        <div className="card" >
                            <img key="item1" src={objTattoo.tattoo_img} alt="" className="card-img-top" />
                                
                        </div> 
                    </div>
                
              
            })}  
        </div>
        </Fade>
    )
}

export default Tattoos
