import axios from "axios";
import { URL_BACKEND } from '../environments/environments';

export const getTattoos = async () => {
    const url = `${URL_BACKEND}/tattoo`;
    const rpta = await axios.get(url);
    return rpta;
};