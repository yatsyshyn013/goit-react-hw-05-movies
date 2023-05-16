import { useState, useEffect } from "react";
// import { Suspense } from "react";
import { Link, useParams, Outlet, useLocation  } from "react-router-dom";
import axios from 'axios';
import { MovieCard } from "components/MovieCard/MovieCard";



const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const { moviesId } = useParams();
    // const location = useLocation();

    useEffect(() => {

    const API_KEY = '192012529bcb26605650afbe6892300f'
    const BASE_URL = 'https://api.themoviedb.org/3/'
    axios.defaults.baseURL = BASE_URL;
    
    async function chosenMovie() {
        setMovieInfo(null)

        try {
            const url = `movie/${moviesId}?api_key=${API_KEY}&language=en-US`
            const response = await axios.get(url)
          

            function normalizeMovie ({ poster_path, overview, genres, popularity, release_date, id, title, vote_average }) {
                const poster = poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://placehold.co/500x750/png'

                const genreList = genres.map(item => item.name).join(' ');

                const date = release_date
                    ? release_date.split('-')[0]
                    : 'No release information';
                
                const rate = vote_average.toFixed(1);
                

                return {poster, overview, genreList, popularity, date, id, title, rate }
            }
                
            
            const movies = await normalizeMovie(response.data)
           
            await setMovieInfo(movies)
       
            } catch (error) {
                console.log(error);
            }
            
    }



        chosenMovie()
        
}, [moviesId])
    
   
    
    return (<div style={{padding: '40px',}}>
        
        {movieInfo !== null && (<MovieCard moviesRender={movieInfo} />)}
            
            </div>)
}

export default MovieDetails;