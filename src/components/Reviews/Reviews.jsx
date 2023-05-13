import { useState, useEffect } from "react";
import { Routes, Route, NavLink, Link, useParams, Outlet, useLocation  } from "react-router-dom";
import axios from 'axios';

const Reviews = () => {

const [reviewsInfo, setReviewsInfo] = useState([])
const { moviesId } = useParams();
    
useEffect(() => {


    const API_KEY = '192012529bcb26605650afbe6892300f'
    const BASE_URL = 'https://api.themoviedb.org/3/'
    axios.defaults.baseURL = BASE_URL;

    setReviewsInfo([])
    
    async function reviewFetch() {
        const url = `movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
        const response = await axios.get(url)
        
        const normalizedReview = await response.data.results.map(({ author, content, id }) => {
          
            return { author, content, id}
        })
        setReviewsInfo([...normalizedReview])
        // console.log(normalizedReview);
        // console.log(response.data.results);
    }
    reviewFetch()
    
}, [])

    return (
        <>
        {reviewsInfo.length > 0 && (
             <ul>
                {reviewsInfo.map(item => (
                    <li key={item.id}>
                        <p>Author: {item.author}</p>
                        <p>{item.content}</p>

                    </li>
                ))}
            </ul>
        )
        }
        
        {reviewsInfo.length === 0 && (
        <p>"We don't have any reviews of this movie"</p>
        )}
       </>
    )
}

export default Reviews