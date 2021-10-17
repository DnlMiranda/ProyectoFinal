import React from 'react'
import "./categorias.scss"

const Categorias = ({ 
    categorias, 
    seleccionarCategoria,
    categoriaSeleccionada 
}) => {
    return (
        <ul className="list-group">
           
            {
                categorias.map((cat)=>{

                    //en cada iteracion declarar una variable
                    let active = +cat.categoria_id === +categoriaSeleccionada ? 'active' : '';

                    return  <li className={`list-group-item ${active}`} key={cat.categoria_id} 
                    onClick={() => {
                        if(+categoriaSeleccionada === +cat.categoria_id){
                            // seleccionarCategoria(null);    
                        } else{
                        seleccionarCategoria(cat.categoria_id);
                        }
                    }}>
                        {cat.categoria_nom}
                        </li>;
                })
            }
        </ul>
    )
}

export default Categorias;



