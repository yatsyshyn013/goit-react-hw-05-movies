import { useState, useEffect } from "react";
import { Routes, Route, NavLink, Link, useParams, Outlet, useLocation  } from "react-router-dom";
import axios from 'axios';
import { MovieCard } from "components/MovieCard/MovieCard";


const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const { moviesId } = useParams();
    
    const location = useLocation();

    useEffect(() => {

    const API_KEY = '192012529bcb26605650afbe6892300f'
    const BASE_URL = 'https://api.themoviedb.org/3/'
    axios.defaults.baseURL = BASE_URL;
    
    async function chosenMovie() {
        setMovieInfo(null)

        try {
            const url = `movie/${moviesId}?api_key=${API_KEY}&language=en-US`
            const response = await axios.get(url)
          

            function normalizeMovie ({ backdrop_path, overview, genres, popularity, release_date, id, title, vote_average }) {
                const poster = backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    : 'https://placehold.co/500x750/png'

                const genreList = genres.map(item => item.name).join(', ');

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
    
    // console.log(movieInfo); 
    
    return (<div>
        
        {movieInfo !== null && (
            // <MovieCard moviesRender={movieInformation} />
            <div div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        
        
      }}>
        <Link to={location.state?.from ?? "/"}>Go back</Link>
        <img src={movieInfo.poster} alt=""  width="600"
          height="800"/>
        <div>{movieInfo.title} ({movieInfo.date})</div>
        <div>Genres: {movieInfo.genreList}</div>
        <div>Overview: {movieInfo.overview}</div>
        <div>Rating: {movieInfo.rate}</div>
        <Link to="cast">cast</Link>
        <Link to="reviews">reviews</Link>
        
        <Outlet />
                
        </div>
        )}
        
        
    </div>)
}

export default MovieDetails;