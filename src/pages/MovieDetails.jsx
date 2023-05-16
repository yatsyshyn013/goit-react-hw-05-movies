import { useState, useEffect } from "react";
// import { Suspense } from "react";
import { useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { MovieCard } from "components/MovieCard/MovieCard";
import { fetchMovie } from "services/API";



const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState({})
    const { moviesId } = useParams();


    useEffect(() => {
    const controller = new AbortController();
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
            toast.error('We did not find any movies for your request')
            }
            
    }



        chosenMovie()
        return () => {
            controller.abort();
    };
}, [moviesId])
    
   
    
    return (<div style={{padding: '40px',}}>
        
        {movieInfo !== null && (<MovieCard moviesRender={movieInfo} />)}
        <ToastContainer
                autoClose={3000}
                position="top-right"
                theme="colored"
                style={{ fontSize:'30px'}}
/>    
            </div>)
}

export default MovieDetails;