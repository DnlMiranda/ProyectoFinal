import axios from 'axios';
import { URL_BACKEND } from '../../environments/environments';

export const getCategorias = () =>{
    return async (dispatch) =>{
        
        const endpoint = `${URL_BACKEND}}/categoria`;
        const response = await axios.get(endpoint);
        dispatch({
            payload: response.data.content
        });
    
    }
}