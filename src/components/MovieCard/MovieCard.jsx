import { Suspense } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AdditionalInfo, GoBackBtn, MovieInfo, MovieContainer, PageLink, MovieName, MovieGenres, MovieOverview } from "./MovieCard.styled";
import { FaArrowLeft } from 'react-icons/fa/';


export function MovieCard({ moviesRender }) {
    const {poster, title, date, genreList, overview, rate} = moviesRender
    const location = useLocation();
    
    // console.log(moviesRender);
    return (
    <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
        
        
        }}>
        { moviesRender !== undefined && (
         <>
        <GoBackBtn to={location.state?.from ?? "/"}><FaArrowLeft/></GoBackBtn>   
       
            <MovieContainer>
            <div>
            <img src={poster} alt="" 
                                 />
            </div>
                        
            <MovieInfo>
            <MovieName><h3>{title} ({date})</h3></MovieName>
            <MovieGenres><b>Genres:</b> {genreList}</MovieGenres>
            <MovieOverview><b>Overview:</b> {overview}</MovieOverview>
            <div><b>Rating:</b> {rate}</div>
                            
                <AdditionalInfo>       
                    <PageLink to="cast">cast</PageLink>
                    <PageLink to="reviews">reviews</PageLink>
                </AdditionalInfo>  
            </MovieInfo>
        </MovieContainer>    
                    
           
            
            <Suspense fallback={<div>Loading page...</div>}>
                     <Outlet />
            </Suspense>
                
          </>         
        )}
             
        </div>
    )
}

MovieCard.propTypes = {
moviesRender: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    genreList: PropTypes.string,
    overview: PropTypes.string,
    rate: PropTypes.string,
  }).isRequired
}