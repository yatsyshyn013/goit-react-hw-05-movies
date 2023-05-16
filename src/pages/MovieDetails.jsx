import { useState, useEffect } from "react";
// import { Suspense } from "react";
import { Link, useParams, Outlet, useLocation  } from "react-router-dom";
import axios from 'axios';
import { MovieCard } from "components/MovieCard/MovieCard";
import { fetchMovie } from "services/API";



const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const { moviesId } = useParams();


    useEffect(() => {
    
    async function chosenMovie() {
        setMovieInfo(null)

        try {
            const response = await fetchMovie({ fetchInfo: `movie/${moviesId}?language=en-US` })
          

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