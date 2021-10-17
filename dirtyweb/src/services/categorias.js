import axios from "axios";
import { URL_BACKEND } from '../environments/environments';

export const getCategorias = async () => {
    const url = `${URL_BACKEND}/categoria`;
    const rpta = await axios.get(url);
    return rpta;
};