import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies"
import NotFound from "pages/NotFound";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from '@emotion/styled'
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from "./SharedLayout/SharedLayout";

// const StyledLink = styled(NavLink)`
//   color: black;
//   text-decoration: none;
//   margin-left: 20px;

//   &.active {
//     color: #E186D6;
//   }
// `;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        // justifyContent: 'center',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
        
        
      }}
    >

      {/* <nav>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/movies" >Movies</StyledLink>
      </nav> */}

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
