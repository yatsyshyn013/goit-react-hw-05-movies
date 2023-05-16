import { useState, useEffect} from "react";
import { Link, useSearchParams, useLocation  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovie } from "services/API";

import styled from '@emotion/styled'
import Searchbar from "components/Searchbar/Searchbar";

const StyledLinks = styled.li`
    :hover {
        color: #E186D6
    }
`

const StyledBtn = styled.button`
                height: 35px;
                border: none;
                font: inherit;
                color: inherit;
                background-color: #E186D6;
                color: white;
                :hover {
                        background-color: #dd9bd5
                    }
`


const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const location = useLocation();



    const [querySearch, setQuerySearch] = useState([])


    useEffect(() => {
        const controller = new AbortController();
        

        

        if (!query) {
            return
        }
            else {
            
            
            async function movieSearch() {
            
                try {
                    
                    const response = await fetchMovie({fetchInfo: `search/movie?language=en-US&query=${query}&page=1&include_adult=false`})
            
                    const MoviesArray = await response.data.results.map(({ id, title }) => {
                        
                    return { id, title }
                    })
                    if (MoviesArray.length === 0 ) {
                        
                        return toast.error('We did not find any movies for your request')}

                    

                    setQuerySearch([...MoviesArray])
                } catch (error) {
                    console.log(error);
                }
            
      
    }
        movieSearch()
    }

        return () => {
            controller.abort();
    };
    }, [query])



    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px',
        }}>

            <Searchbar setSearchParams={setSearchParams} />
            
    
            
            <ul>
                {querySearch.map(item => (
                    <StyledLinks key={item.id}><Link to={`/movies/${item.id}`} state={{ from: location }} style={{ color: 'black', textDecoration:'none',}}>{item.title}</Link></StyledLinks>
                ))}
            </ul>

            
    </div>)
}

export default Movies;