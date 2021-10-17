import axios from 'axios';
import { URL_BACKEND } from '../../environments/environments';

export const getTattoos = () =>{
    return async (dispatch) =>{
        
        const endpoint = `${URL_BACKEND}}/tattoo`;
        const response = await axios.get(endpoint);
        dispatch({
            payload: response.data.content
        });
    
    }
}