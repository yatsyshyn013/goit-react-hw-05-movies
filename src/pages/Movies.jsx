import { useState} from "react";
import { Link, useSearchParams, useLocation  } from "react-router-dom";
import axios from 'axios';
import { FaSearch } from 'react-icons/fa/';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from '@emotion/styled'

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

    const onSearchClick = (e) => {
        e.preventDefault()

        if (query === "" || query === null) {
            
            return toast.error('The search field cannot be empty');
        } else {


        const API_KEY = '192012529bcb26605650afbe6892300f'
        const BASE_URL = 'https://api.themoviedb.org/3/'
        axios.defaults.baseURL = BASE_URL;
        
            async function movieSearch() {
            
                try {
                    const url = `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
                    const response = await axios.get(url)
            
                    const MoviesArray = await response.data.results.map(({ id, title }) => {
                    return { id, title }
                })
        
     
                    setQuerySearch([...MoviesArray])
                } catch (error) {
                    console.log(error);
                }
            
      
    }
        movieSearch()
    }

        

    }


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '40px',
        }}>
            
    <form onSubmit={onSearchClick} style={{
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center'
        }}>
      {/* <h1>Products</h1> */}
      <input
        type="text"
        value={query}
                    onChange={e => setSearchParams({ query: e.target.value })}
                    style={{
                        height: '30px',
                        width: '300px',
                        fontSize: '20px'
        }}
                />
        <StyledBtn type="submit" >
                            <FaSearch  style={{
                                height: '30px',
                                display: 'flex',
                                alignItems: 'center'

        }}/>
        </StyledBtn>
        </form>
            
            <ul>
                {querySearch.map(item => (
                    <StyledLinks key={item.id}><Link to={`/movies/${item.id}`} state={{ from: location }} style={{ color: 'black', textDecoration:'none',}}>{item.title}</Link></StyledLinks>
                ))}
            </ul>

            
            <ToastContainer
                autoClose={3000}
                position="top-right"
                theme="colored"
                style={{ fontSize:'30px'}}
/>
    </div>)
}

export default Movies;