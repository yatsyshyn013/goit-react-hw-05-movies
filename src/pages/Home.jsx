import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from '@emotion/styled'
import { fetchMovie } from "services/API";

const StyledLinks = styled.li`
    :hover {
        color: #E186D6
    }
`



const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const location = useLocation();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchMovies() {

            setPopularMovies([])


            try {
               
                const response = await fetchMovie({ fetchInfo: 'trending/movie/day' })
                
                const popularMoviesArray = await response.data.results.map(({ id, title }) => {
                    return { id, title }
                })
               

                setPopularMovies([...popularMoviesArray])
              
            } catch (error) {
                console.log(error);
            }
    
}

        fetchMovies()
        return () => {
            controller.abort();
    };
    }, [])


    return (
        <div style={{padding: '40px',}}>
            <h3>Trending today</h3>
            <ul>
                {popularMovies.map(item => (
                    <StyledLinks key={item.id}><Link to={`/movies/${item.id}`} state={{ from: location }} style={{ color: 'black', textDecoration:'none'}}>{item.title}</Link></StyledLinks>
                ))}
            </ul>
        </div>
    )
}

export default Home;