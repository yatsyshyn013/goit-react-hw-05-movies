import { useState, useEffect } from "react";
import { Routes, Route, NavLink, Link, useParams, Outlet, useLocation  } from "react-router-dom";
import axios from 'axios';



const Cast = () => {
const [castInfo, setCastInfo] = useState([])
const { moviesId } = useParams();
    
useEffect(() => {


const API_KEY = '192012529bcb26605650afbe6892300f'
    const BASE_URL = 'https://api.themoviedb.org/3/'
    axios.defaults.baseURL = BASE_URL;

    setCastInfo([])
    
    async function castFetch() {
        const url = `movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`
        const response = await axios.get(url)
        // console.log(response);
        const normalizedCast = response.data.cast.map(({ id, profile_path, name, character }) => {
            const actorIcon = profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://placehold.co/500x750/png'
            return { id, actorIcon, name, character}
        })
        setCastInfo([...normalizedCast])
        // console.log(normalizedCast);
    }
    castFetch()
    
}, [])

    return (
        <ul>
                {castInfo.map(item => (
                    <li key={item.id}>
                        <img src={item.actorIcon} alt="" width="200"/>
                        <p>Name: {item.name}</p>
                        <p>Character: {item.character}</p>

                    </li>
                ))}
            </ul>
    )
}

export default Cast