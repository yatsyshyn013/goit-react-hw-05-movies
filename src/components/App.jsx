import { lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from '@emotion/styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(()=> import("../pages/Home"))  
const Movies = lazy(() => import("../pages/Movies"))
const MovieDetails = lazy(() => import("../pages/MovieDetails"))
const NotFound = lazy(() => import("../pages/NotFound"))
const Cast = lazy(() => import("./Cast/Cast"))
const Reviews = lazy(() => import("./Reviews/Reviews"))

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
        
        
      }}
    >


      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>

      
    </div>
  );
};
