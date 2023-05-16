import axios from 'axios';
const API_KEY = '192012529bcb26605650afbe6892300f'
const BASE_URL = 'https://api.themoviedb.org/3/'
axios.defaults.baseURL = BASE_URL;



export async function fetchMovie({fetchInfo}) {

    try {
        
        const response = await axios.get(fetchInfo, {params: {api_key: API_KEY}})
        return response

    } catch (error) {
        console.log(error);
    }
    
}