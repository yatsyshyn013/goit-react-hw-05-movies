import { useState, useEffect } from "react";
import { Routes, Route, NavLink, Link, useParams, useSearchParams, Outlet, useLocation  } from "react-router-dom";
import axios from 'axios';
import { Field, Form, Formik, } from 'formik';
import { FaSearch } from 'react-icons/fa/';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
        const location = useLocation();



    const [querySearch, setQuerySearch] = useState([])

    const onSearchClick = (e) => {
        e.preventDefault()

        if (query === "") {
            
            return toast.error('The search field cannot be empty');
        } else {


            const API_KEY = '192012529bcb26605650afbe6892300f'
        const BASE_URL = 'https://api.themoviedb.org/3/'
        axios.defaults.baseURL = BASE_URL;
        
        async function movieSearch() {
        const url = `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
            const response = await axios.get(url)
            
            const popularMoviesArray = await response.data.results.map(({ id, title }) => {
                    return { id, title }
                })
        
     
        setQuerySearch([...popularMoviesArray])
        // console.log(popularMoviesArray);
        // console.log(response.data.results);
    }
    movieSearch()
        }

        

    }


    return (
        <>
            
            <form onSubmit={onSearchClick}>
      {/* <h1>Products</h1> */}
      <input
        type="text"
        value={query}
        onChange={e => setSearchParams({ query: e.target.value })}
                />
                <button  type="submit" className="button">
                            <FaSearch/>
                </button>
            </form>
            
            <ul>
                {querySearch.map(item => (
                    <li key={item.id}><Link to={`/movies/${item.id}`} state={{ from: location }}>{item.title}</Link></li>
                ))}
            </ul>

            
            <ToastContainer
          autoClose={3000}
          position="top-right"
                theme="colored"
/>
    </>)
}

export default Movies;